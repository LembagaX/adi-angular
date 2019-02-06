import { MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-requested-product-dialog',
  templateUrl: './requested-product-dialog.component.html',
  styleUrls: ['./requested-product-dialog.component.scss']
})
export class RequestedProductDialogComponent implements OnInit {

  public quantityControl: FormControl;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngOnInit() {
    this.quantityControl = new FormControl('', [
      Validators.required,
      Validators.max(this.data.product.stock)
    ]);
  }
}
