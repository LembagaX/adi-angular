import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmationDialogComponent } from 'src/app/partials/confirmation-dialog/confirmation-dialog.component';
import { LoadingPopupComponent } from 'src/app/partials/loading-popup/loading-popup.component';

@Component({
  selector: 'app-orders-confirmation-stepper',
  templateUrl: './orders-confirmation-stepper.component.html',
  styleUrls: ['./orders-confirmation-stepper.component.scss']
})
export class OrdersConfirmationStepperComponent implements OnInit {

  public products: any[];

  constructor(
    private _dialog: MatDialog
  ) { }

  ngOnInit() {
    this.products = [
      { name: 'Product 1', quantity: 100 },
      { name: 'Product 2', quantity: 20 },
      { name: 'Product 3', quantity: 201 }
    ];
  }

  public commit() {
    const dialog = this._dialog.open(ConfirmationDialogComponent);
    dialog.afterClosed().subscribe(result => {
      if (result) {
        const loading = this._dialog.open(LoadingPopupComponent, { data: 'Creating Order, this may take a moment...' });
      }
    });
  }

}
