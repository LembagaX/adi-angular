import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Product } from 'src/app/Models/product';

@Component({
  selector: 'app-discount-dialog',
  templateUrl: './discount-dialog.component.html',
  styleUrls: ['./discount-dialog.component.scss']
})
export class DiscountDialogComponent implements OnInit {

  public price: number;
  public return: number;
  public discount: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Product) {}

  ngOnInit() {
    this.price = this.data.price * this.data.quantity;
    this.discount = new FormGroup({
      amount: new FormControl(0, [Validators.max(this.price)]),
      percent: new FormControl(0 , [Validators.max(100)])
    });
  }

  public sumPrice(): number {
    if (this.discount.value.percent !== 0) {
      return (this.discount.value.percent * this.price) / 100;
    } else {
      return this.discount.value.amount;
    }
  }

}
