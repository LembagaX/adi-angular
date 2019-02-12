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
  public order: { subtotal: number; productCount: number; };

  constructor() { }

  ngOnInit() {
    this.stepOneValid = false;
  }

  public stepOnValid(boolean: boolean) {
    this.stepOneValid = boolean;
  }

  public fetchSelectedProducts(products: Product[]) {
    this.products = products;
  }

  public fetchProductSummary(data: { subtotal: number; productCount: number; }) {
    this.order = data;
  }
}
