import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/response/product';
import { Cart } from 'src/app/request/cart';
import { Order } from 'src/app/request/order';
import { Address } from 'src/app/response/address';
import { Customer } from 'src/app/response/customer';
import { PaymentMetadata } from 'src/app/request/payment-metadata';

@Component({
  selector: 'app-orders-create',
  templateUrl: './orders-create.component.html',
  styleUrls: ['./orders-create.component.scss']
})
export class OrdersCreateComponent implements OnInit {

  public carts: Cart[];
  public products: Product[];
  public stepOneValid: boolean;
  public stepTwoValid: boolean;
  public stepThreeValid: boolean;
  public orderMetadata: { subtotal: number; productCount: number; };
  public paymentMetadata: PaymentMetadata;
  public order: Order;
  public address: Address;
  public customer: Customer;

  constructor() { }

  ngOnInit() {
    this.stepOneValid = false;
    this.stepTwoValid = false;
    this.stepThreeValid = false;
  }

  public stepOnValid(boolean: boolean) {
    this.stepOneValid = boolean;
  }

  public stepTwoOnValid(boolean: boolean) {
    this.stepTwoValid = boolean;
  }

  public setAddress(address: Address) {
    this.address = address;
  }

  public stepThreeOnValid(boolean: boolean) {
    this.stepThreeValid = boolean;
  }

  public fetchSelectedProducts(products: Product[]) {
    this.products = products;
  }

  public fetchProductSummary(data: { subtotal: number; productCount: number; }) {
    this.orderMetadata = data;
  }

  public fetchCarts(carts: Cart[]) {
    this.carts = carts;
  }
  public setCustomer(customer: Customer) {
    this.customer = customer;
  }
  public fetchPaymentMetadata(metadata: PaymentMetadata) {
    this.paymentMetadata = metadata;
  }
}
