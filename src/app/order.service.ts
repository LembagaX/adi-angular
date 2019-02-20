import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Order as Request } from './request/order';
import { Order } from './response/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  protected base: string;

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) {
    this.base = 'http://adi-server.herokuapp.com/';
  }

  public index() {
    const suffix = 'orders.json';
    const header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.auth.currentUser().token
      })
    };
    return this.http.get<Order[]>(this.base + suffix, header);
  }

  public create(request: Request) {
    const suffix = 'orders.json';
    const header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.auth.currentUser().token
      })
    };
    return this.http.post<Order>(this.base + suffix, request, header);
  }
}
