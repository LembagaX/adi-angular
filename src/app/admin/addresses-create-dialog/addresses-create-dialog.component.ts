import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Customer } from 'src/app/response/customer';

@Component({
  selector: 'app-addresses-create-dialog',
  templateUrl: './addresses-create-dialog.component.html',
  styleUrls: ['./addresses-create-dialog.component.scss']
})
export class AddressesCreateDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Customer,
    private _dialogRef: MatDialogRef<AddressesCreateDialogComponent>
  ) { }

  ngOnInit() {
  }

  public afterCreateAddress(result: boolean) {
    if (result) {
      this._dialogRef.close(true);
    }
  }

}
