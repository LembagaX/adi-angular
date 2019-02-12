import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-customers-address-sheet',
  templateUrl: './customers-address-sheet.component.html',
  styleUrls: ['./customers-address-sheet.component.scss']
})
export class CustomersAddressSheetComponent implements OnInit {

  constructor(
    private sheetRef: MatBottomSheetRef<CustomersAddressSheetComponent>
  ) { }

  ngOnInit() {
  }

  public close() {
    this.sheetRef.dismiss();
  }

}
