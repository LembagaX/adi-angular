import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/response/product';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Cart } from 'src/app/request/cart';

@Component({
  selector: 'app-orders-products-stepper',
  templateUrl: './orders-products-stepper.component.html',
  styleUrls: ['./orders-products-stepper.component.scss']
})
export class OrdersProductsStepperComponent implements OnInit {

  @Output() carts =  new EventEmitter<Cart[]>();
  @Output() valid = new EventEmitter<boolean>();
  @Output() products =  new EventEmitter<Product[]>();
  @Output() productsSummary = new EventEmitter<{ subtotal: number; productCount: number; }>();

  public subTotal: number;
  public forms: FormGroup[];
  public productsCount: number;
  public selectedProducts: Product[];
  public selectedCarts: Cart[];

  constructor() { }

  ngOnInit() {
    this.forms = [];
    this.selectedProducts = [];
    this.selectedCarts = [];
    this.subTotal = 0;
    this.productsCount = 0;
    this.sendValidity();
  }

  public onSelected(product: Product) {
    if (!this.selectedProducts.find(current => current.id === product.id)) {
      this.selectedProducts.push(product);
      const cart: Cart = {
        product_id: product.id,
        quantity: 0
      };
      const form: FormGroup = new FormGroup({
        quantity: new FormControl(0, [Validators.required, Validators.min(1), Validators.max(product.stock)]),
        price: new FormControl(product.price, [Validators.required])
      });
      this.forms.push(form);
      this.buildCarts(product, cart);
      form.controls['quantity'].valueChanges.subscribe(() => {
        this.selectedCarts.find(c => c.product_id === product.id).quantity = form.get('quantity').value;
        this.products.emit(this.selectedProducts);
        this.carts.emit(this.selectedCarts);
        this.productsSummary.emit({ subtotal: this.subTotal, productCount: this.productsCount });
        this.sendValidity();
        this.sumForms();
      });
    }
    this.sendValidity();
  }

  private buildCarts(product: Product, cart: Cart) {
    if (!this.selectedCarts.find(c => c.product_id === product.id)) {
      this.selectedCarts.push(cart);
    }
  }

  private sumForms() {
    this.subTotal = 0;
    this.productsCount = 0;
    this.forms.forEach(form => {
      this.subTotal += form.controls['quantity'].value * form.controls['price'].value;
      this.productsCount += form.controls['quantity'].value;
    });
  }

  private sendValidity() {
    let valid = false;
    this.forms.forEach(form => {
      valid = true;
      if (form.controls['quantity'].invalid) {
        valid = false;
      }
    });
    this.valid.emit(valid);
  }

  public unselect(i: number) {
    this.forms.splice(i, 1);
    this.selectedProducts.splice(i, 1);
    this.selectedCarts.splice(i, 1);
    this.sendValidity();
    this.sumForms();
  }
}
