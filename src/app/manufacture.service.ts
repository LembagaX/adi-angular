import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Manufacture } from './response/manufacture';

@Injectable({
  providedIn: 'root'
})
export class ManufactureService {
  protected base: String;

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) {
    this.base = 'http://adi-server.herokuapp.com/';
  }

  public index() {
    const suffix = 'manufactures.json';
    const header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.auth.currentUser().token
      })
    };
    return this.http.get<Manufacture[]>(this.base + suffix, header);
  }

  public create() {
    const suffix = `manufactures.json`;
    const header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.auth.currentUser().token
      })
    };
    return this.http.post<Manufacture>(this.base + suffix, {}, header);
  }

  public destroy(manufacture: Manufacture) {
    const suffix = `manufactures/${manufacture.code}.json`;
    const header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.auth.currentUser().token
      })
    };
    return this.http.delete<Manufacture>(this.base + suffix, header);
  }
}
