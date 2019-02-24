import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Catalog } from './request/catalog';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  protected base: string;

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) {
    this.base = 'http://adi-server.herokuapp.com/';
  }

  public index() {
    const suffix = 'catalogs.json';
    const header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.auth.currentUser().token
      })
    };
    return this.http.get<Catalog[]>(this.base + suffix, header);
  }

  public create(request: Catalog) {
    const suffix = 'catalogs.json';
    const header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.auth.currentUser().token
      })
    };
    return this.http.post<Catalog>(this.base + suffix, request, header);
  }

  public update(request: Catalog) {
    const suffix = `catalogs/${request.slug}.json`;
    const header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.auth.currentUser().token
      })
    };
    return this.http.patch<Catalog>(this.base + suffix, request, header);
  }
}
