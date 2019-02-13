import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Customer } from 'src/app/response/customer';

@Component({
  selector: 'app-customers-create-dialog',
  templateUrl: './customers-create-dialog.component.html',
  styleUrls: ['./customers-create-dialog.component.scss']
})
export class CustomersCreateDialogComponent implements OnInit {

  public customer: Customer;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: number,
    private _dialogRef: MatDialogRef<CustomersCreateDialogComponent>
  ) { }

  ngOnInit() {
  }

  public takeCustomer(customer: Customer) {
    this.customer = customer;
    this._dialogRef.close(this.customer);
  }

}
