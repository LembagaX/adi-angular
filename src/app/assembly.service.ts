import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Product } from './response/product';
import { Assembly } from './response/assembly';
import { Assembly as Request } from './request/assembly';

@Injectable({
  providedIn: 'root'
})
export class AssemblyService {
  protected base: string;

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) {
    this.base = 'http://adi-server.herokuapp.com/';
  }

  public index(product: Product) {
    const suffix = `products/${product.code}/assemblies.json`;
    const header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.auth.currentUser().token
      })
    };
    return this.http.get<Product>(this.base + suffix, header);
  }

  public create(product: Product, request: Request) {
    const suffix = `products/${product.code}/assemblies.json`;
    const header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.auth.currentUser().token
      })
    };
    return this.http.post<Product>(this.base + suffix, request, header);
  }

  public update(product: Product, assembly: Assembly,request: Request) {
    const suffix = `products/${product.code}/assemblies/${assembly.id}.json`;
    const header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.auth.currentUser().token
      })
    };
    return this.http.patch<Product>(this.base + suffix, request, header);
  }

  public destroy(product: Product, assembly: Assembly) {
    const suffix = `products/${product.code}/assemblies/${assembly.id}.json`;
    const header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.auth.currentUser().token
      })
    };
    return this.http.delete<Product>(this.base + suffix, header);
  }
}
