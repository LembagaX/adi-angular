import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Product } from 'src/app/Models/product';

@Component({
  selector: 'app-remove-selected-product',
  templateUrl: './remove-selected-product.component.html',
  styleUrls: ['./remove-selected-product.component.scss']
})
export class RemoveSelectedProductComponent implements OnInit {

  public quantityControl: FormControl;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Product
  ) {}

  ngOnInit() {
    this.quantityControl = new FormControl('', [
      Validators.required,
      Validators.max(this.data.quantity),
      Validators.min(1)
    ]);
  }

}
