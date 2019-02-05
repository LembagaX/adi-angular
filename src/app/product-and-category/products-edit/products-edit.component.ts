import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Product } from 'src/app/response/product';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.scss']
})
export class ProductsEditComponent implements OnInit {

  public product: Product;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { product: Product }
  ) { }

  ngOnInit() {
    this.product = this.data.product;
  }

}
