import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatBottomSheet, MatDialog } from '@angular/material';
import { CustomersAddressSheetComponent } from '../customers-address-sheet/customers-address-sheet.component';
import { CustomerService } from 'src/app/customer.service';
import { CustomersCreateDialogComponent } from '../customers-create-dialog/customers-create-dialog.component';
import { LoadingPopupComponent } from 'src/app/partials/loading-popup/loading-popup.component';
import { Customer } from 'src/app/response/customer';
import { AddressesCreateDialogComponent } from '../addresses-create-dialog/addresses-create-dialog.component';
import { Address } from 'src/app/response/address';

@Component({
  selector: 'app-orders-customer-stepper',
  templateUrl: './orders-customer-stepper.component.html',
  styleUrls: ['./orders-customer-stepper.component.scss']
})
export class OrdersCustomerStepperComponent implements OnInit {

  @Output() completed = new EventEmitter<boolean>();

  public form: FormGroup;
  public customer: Customer;
  public defaultAddress: Address;

  constructor(
    private _sheet: MatBottomSheet,
    private _service: CustomerService,
    private _dialog: MatDialog
  ) { }

  ngOnInit() {
    this.completed.emit(false);
    this.buildForm();
  }

  public pickAddress() {
    const sheet = this._sheet.open(CustomersAddressSheetComponent, {
      data: this.customer
    });

    sheet.afterDismissed().subscribe(result => {
      if (result) {
        this.defaultAddress = result;
      }
    });
    this.checkComplete();
  }

  private buildForm() {
    this.form = new FormGroup({
      phone: new FormControl(null, [
        Validators.required, Validators.minLength(8), Validators.maxLength(17),
        Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s\\./0-9]*$')
      ])
    });
  }

  public fetchCustomer() {
    if (this.form.valid) {
      const loading = this._dialog.open(LoadingPopupComponent, {
        data: 'Looking for Customer'
      });

      this._service.show(this.form.controls['phone'].value).subscribe(response => {
        loading.close();
        this.customer = response;
        this.defaultAddress = this.customer.default_address;
        this.checkComplete();
      },
      error => {
        loading.close();
        const dialogRef = this._dialog.open(CustomersCreateDialogComponent, {
          data: this.form.controls['phone'].value,
          maxWidth: '40%'
        });
        dialogRef.afterClosed().subscribe(result => {
          this.customer = result;
          this.checkComplete();
        });
      });
    }
  }

  public createAddress() {
    const dialogRef = this._dialog.open(AddressesCreateDialogComponent, { data: this.customer });
    dialogRef.afterClosed().subscribe(() => {
      this.fetchCustomer();
    });
    this.checkComplete();
  }

  private checkComplete() {
    this.completed.emit(this.form.valid && this.customer.addresses.length !== 0);
  }
}
