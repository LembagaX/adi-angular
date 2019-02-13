import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/response/product';

@Component({
  selector: 'app-orders-create',
  templateUrl: './orders-create.component.html',
  styleUrls: ['./orders-create.component.scss']
})
export class OrdersCreateComponent implements OnInit {

  public products: Product[];
  public stepOneValid: boolean;
  public stepTwoValid: boolean;
  public order: { subtotal: number; productCount: number; };

  constructor() { }

  ngOnInit() {
    this.stepOneValid = false;
    this.stepTwoValid = false;
  }

  public stepOnValid(boolean: boolean) {
    this.stepOneValid = boolean;
    console.log('Step satu ' + boolean);
  }

  public stepTwoOnValid(boolean: boolean) {
    this.stepTwoValid = boolean;
    console.log('Step dua ' + boolean);
  }

  public fetchSelectedProducts(products: Product[]) {
    this.products = products;
    console.log({ selectedProduct: this.products });
  }

  public fetchProductSummary(data: { subtotal: number; productCount: number; }) {
    this.order = data;
    console.log({ orderMetadata: this.order });
  }
}
