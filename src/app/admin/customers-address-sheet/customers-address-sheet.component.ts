import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA, MatDialog } from '@angular/material';
import { Customer } from 'src/app/response/customer';
import { Address } from 'src/app/response/address';
import { AddressService } from 'src/app/address.service';
import { CustomerService } from 'src/app/customer.service';
import { LoadingPopupComponent } from 'src/app/partials/loading-popup/loading-popup.component';

@Component({
  selector: 'app-customers-address-sheet',
  templateUrl: './customers-address-sheet.component.html',
  styleUrls: ['./customers-address-sheet.component.scss']
})
export class CustomersAddressSheetComponent implements OnInit {

  constructor(
    private sheetRef: MatBottomSheetRef<CustomersAddressSheetComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: Customer,
    private _customer: CustomerService,
  ) {}

  ngOnInit() {
  }

  public close(address: Address) {
    this.sheetRef.dismiss(address);
  }
}
