import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ConfirmationDialogComponent } from 'src/app/partials/confirmation-dialog/confirmation-dialog.component';
import { LoadingPopupComponent } from 'src/app/partials/loading-popup/loading-popup.component';
import { Product } from 'src/app/response/product';
import { Order } from 'src/app/request/order';
import { Cart } from 'src/app/request/cart';
import { Address } from 'src/app/response/address';
import { Customer } from 'src/app/response/customer';
import { PaymentMetadata } from 'src/app/request/payment-metadata';
import { OrderService } from 'src/app/order.service';
import { CartService } from 'src/app/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders-confirmation-stepper',
  templateUrl: './orders-confirmation-stepper.component.html',
  styleUrls: ['./orders-confirmation-stepper.component.scss']
})
export class OrdersConfirmationStepperComponent implements OnInit {

  @Input() public products: Product[];
  @Input() public order: { subtotal: number; productCount: number; discount?: number; };
  @Input() public carts: Cart[];
  @Input() public address: Address;
  @Input() public customer: Customer;
  @Input() public paymentMetadata: PaymentMetadata;

  constructor(
    private _dialog: MatDialog,
    private _order: OrderService,
    private _cart: CartService,
    private _snackbar: MatSnackBar,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  public commit() {
    const dialog = this._dialog.open(ConfirmationDialogComponent);
    dialog.afterClosed().subscribe(result => {
      if (result) {
        const loading = this._dialog.open(LoadingPopupComponent, { data: 'Creating Order, this may take a moment...' });
        const req: Order = {
          order: {
            price: this.order.subtotal,
            address_id: this.address.id,
            discount: this.order.subtotal - (this.order.subtotal - this.order.discount)
          },
          invoice: {
            termin: +this.paymentMetadata.termin_id,
            currency_id: this.paymentMetadata.currency_id
          }
        };
        this._order.create(req).subscribe((response) => {
          this._cart.create(response, this.carts).subscribe(() => {
            loading.close();
            this._snackbar.open('Successfully Create Order', null, { duration: 2000 });
            this._router.navigate(['/orders']);
          });
        });
      }
    });
  }

}
