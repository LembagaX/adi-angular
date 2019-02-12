import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-orders-payment-stepper',
  templateUrl: './orders-payment-stepper.component.html',
  styleUrls: ['./orders-payment-stepper.component.scss']
})
export class OrdersPaymentStepperComponent implements OnInit {

  public cash: boolean;
  public price: number;
  public form: FormGroup;
  public usePrice: boolean;

  constructor() { }

  ngOnInit() {
    this.cash = true;
    this.usePrice = true;
    this.price = 1000000;
    this.buildForm();
  }


  private buildForm() {
    this.form = new FormGroup({
      termin: new FormControl(1, [Validators.required]),
      discount: new FormControl({ value: null, disabled: false }, []),
      percent: new FormControl({ value: null, disabled: true }, []),
      total: new FormControl({ value: this.price, disabled: true }, [])
    });

    this.form.controls['discount'].valueChanges.subscribe(() => {
      this.form.controls['total'].setValue(this.price - this.form.controls['discount'].value);
    });

    this.form.controls['percent'].valueChanges.subscribe(() => {
      this.form.controls['total'].setValue(this.price - ((this.form.controls['percent'].value * this.price) / 100));
    });
  }

  public reverse() {
    this.usePrice = !this.usePrice;
    if (this.usePrice) {
      this.form.get('discount').enable();
      this.form.get('percent').disable();
    } else {
      this.form.get('percent').enable();
      this.form.get('discount').disable();
    }
  }
}
