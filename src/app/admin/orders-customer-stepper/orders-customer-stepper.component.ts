import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatBottomSheet } from '@angular/material';
import { CustomersAddressSheetComponent } from '../customers-address-sheet/customers-address-sheet.component';

@Component({
  selector: 'app-orders-customer-stepper',
  templateUrl: './orders-customer-stepper.component.html',
  styleUrls: ['./orders-customer-stepper.component.scss']
})
export class OrdersCustomerStepperComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private sheet: MatBottomSheet
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  public pickAddress() {
    this.sheet.open(CustomersAddressSheetComponent);
  }

  private buildForm() {
    this.form = new FormGroup({
      phone: new FormControl(null, [
        Validators.required, Validators.minLength(8), Validators.maxLength(17),
        Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s\\./0-9]*$')
      ])
    });
  }
}
