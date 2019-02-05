import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Product } from './response/product';
import { Product as Request } from './request/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  protected base: string;

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) {
    this.base = 'http://adi-server.herokuapp.com/';
  }

  public index() {
    const suffix = 'products.json';
    const header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.auth.currentUser().token
      })
    };
    return this.http.get<Product[]>(this.base + suffix, header);
  }

  public create(request: Request) {
    const suffix = `products.json`;
    const header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.auth.currentUser().token
      })
    };
    return this.http.post<Product>(this.base + suffix, request, header);
  }

  public destroy(product: Product) {
    const suffix = `products/${product.code}.json`;
    const header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.auth.currentUser().token
      })
    };
    return this.http.delete<Product>(this.base + suffix, header);
  }
}
