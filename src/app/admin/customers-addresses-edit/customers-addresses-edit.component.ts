import { Component, OnInit, Inject } from '@angular/core';
import { Customer } from 'src/app/response/customer';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { Address } from 'src/app/response/address';

@Component({
  selector: 'app-customers-addresses-edit',
  templateUrl: './customers-addresses-edit.component.html',
  styleUrls: ['./customers-addresses-edit.component.scss']
})
export class CustomersAddressesEditComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { customer: Customer, address: Address },
    private _dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  public afterDialog(result: boolean) {
    if (result) {
      this._dialog.closeAll();
    }
  }
}
