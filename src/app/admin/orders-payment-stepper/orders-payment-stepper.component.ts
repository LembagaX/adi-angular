import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { ErrorDialogComponent } from 'src/app/partials/error-dialog/error-dialog.component';
import { CurrencyService } from 'src/app/currency.service';
import { Currency } from 'src/app/response/currency';

@Component({
  selector: 'app-orders-payment-stepper',
  templateUrl: './orders-payment-stepper.component.html',
  styleUrls: ['./orders-payment-stepper.component.scss']
})
export class OrdersPaymentStepperComponent implements OnInit {

  @Input() public order: { subtotal: number; productCount: number; };
  @Output() completed = new EventEmitter<boolean>();

  public cash: boolean;
  public price: number;
  public form: FormGroup;
  public usePrice: boolean;
  public complete: boolean;
  public currencies: Currency[];

  constructor(
    private _dialog: MatDialog,
    private _currency: CurrencyService
  ) {}

  ngOnInit() {
    this.cash = true;
    this.usePrice = true;
    this.complete = false;
    this.price = this.order.subtotal;
    this.buildForm();
    this.checkValidity();
    this.fetchCurrencies();
  }

  private fetchCurrencies() {
    this._currency.index().subscribe(response => {
      this.currencies = response;
    });
  }

  private buildForm() {
    this.form = new FormGroup({
      termin: new FormControl(null, [Validators.required]),
      discount: new FormControl(null, [Validators.max(this.price)]),
      percent: new FormControl(null, [Validators.max(100)]),
      total: new FormControl(this.price, []),
      currency: new FormControl(null, [Validators.required])
    });

    this.form.controls['termin'].disable();
    this.form.controls['percent'].disable();
    this.form.controls['total'].disable();
    this.form.controls['currency'].valueChanges.subscribe(() => {
      this.isCash(this.cash);
      this.checkValidity();
    });

    this.form.controls['discount'].valueChanges.subscribe(() => {
      const sum = this.price - this.form.controls['discount'].value;
      if (sum < 0) {
        this._dialog.open(ErrorDialogComponent, { data: 'Invalid Discount given'});
      } else {
        this.form.controls['total'].setValue(sum);
      }
      this.checkValidity();
    });

    this.form.controls['percent'].valueChanges.subscribe(() => {
      const sum = this.price - ((this.form.controls['percent'].value * this.price) / 100);
      if (sum < 0) {
        this._dialog.open(ErrorDialogComponent, { data: 'Invalid Discount given' });
      } else {
        this.form.controls['total'].setValue(sum);
      }
      this.checkValidity();
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
    this.checkValidity();
  }

  public isCash(status: boolean) {
    this.cash = status;
    if (!this.cash) {
      this.form.controls['termin'].enable();
    } else {
      this.form.controls['termin'].disable();
    }
    this.checkValidity();
  }

  private checkValidity() {
    this.complete = false;
    if (this.order && this.form.valid) {
      this.complete = true;
    }
    this.completed.emit(this.complete);
  }
}
