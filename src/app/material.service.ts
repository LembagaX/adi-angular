import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Material } from './response/material';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  protected base: string;

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) {
    this.base = 'http://adi-server.herokuapp.com/';
  }

  public index() {
    const suffix = 'materials.json';
    const header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.auth.currentUser().token
      })
    };
    return this.http.get<Material[]>(this.base + suffix, header);
  }

  public show(slug: string) {
    const suffix = `materials/${slug}.json`;
    const header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.auth.currentUser().token
      })
    };
    return this.http.get<Material>(this.base + suffix, header);
  }

  public update(slug: string, material: FormGroup) {
    const suffix = `materials/${slug}.json`;
    const header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.auth.currentUser().token
      })
    };
    return this.http.patch<Material>(this.base + suffix, material.value, header);
  }
}
