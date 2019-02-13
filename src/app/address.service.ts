import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Address as Request } from './request/address';
import { Customer } from './response/customer';
import { Address } from './response/address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  protected base: string;

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) {
    this.base = 'http://adi-server.herokuapp.com/';
  }

  public create(customer: Customer, request: Request) {
    const suffix = `customers/${customer.id}/addresses.json`;
    const header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.auth.currentUser().token
      })
    };
    return this.http.post<Address>(this.base + suffix, request, header);
  }

  public destroy(customer: Customer, address: Address) {
    const suffix = `customers/${customer.id}/addresses/${address.id}.json`;
    const header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.auth.currentUser().token
      })
    };
    return this.http.delete<Address>(this.base + suffix, header);
  }

}
