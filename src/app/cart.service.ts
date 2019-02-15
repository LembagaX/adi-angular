import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Cart } from './request/cart';
import { Order } from './response/order';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  protected base: string;

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) {
    this.base = 'http://adi-server.herokuapp.com/';
  }

  public create(order: Order, request: Cart[]) {
    const suffix = `orders/${order.number}/carts.json`;
    const header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.auth.currentUser().token
      })
    };
    return this.http.post<Cart[]>(this.base + suffix, { carts: request}, header);
  }
}
