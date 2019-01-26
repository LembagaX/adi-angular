import { User } from './models/user';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from './auth.service';
import { Material } from './response/material';
import { Provider } from './response/provider';
import { ArrayResponse } from './array-response';
import { Credential } from './interfaces/credential';
import { Depreciation } from './request/depreciation';
import { PlainResponse } from './interfaces/plain-response';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PurchasingGrowth } from './response/purchasing-growth';
import { ChartUserByRole } from './response/chart-user-by-role';
import { MaterialPuchasing } from './response/material-puchasing';
import { CredentialResponse } from './interfaces/credential-response';
import { Depreciation as DepreciationResponse } from './response/depreciation';
import { MaterialPuchasing as MaterialPuchasingRequest } from './request/material-puchasing';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  protected base: String;

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) {
    this.base = 'http://adi-server.herokuapp.com/';
  }

  public generateToken(body: Credential) {
    const suffix = 'users/token.json';
    const header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    };
    return this.http.post<CredentialResponse>(this.base + suffix, body, header);
  }

  public userAll() {
    const suffix = 'users.json';
    const header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.auth.currentUser().token
      })
    };
    return this.http.get<ArrayResponse[]>(this.base + suffix, header);
  }

  public userCreate(user: User) {
    const suffix = 'users.json';
    const header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.auth.currentUser().token
      })
    };
    return this.http.post<CredentialResponse>(this.base + suffix, {
      user: user,
      token: this.auth.currentUser().token
    }, header);
  }

  public updateUser(user: User) {
    const suffix = `users/${user.id}.json`;
    const header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.auth.currentUser().token
      })
    };
    return this.http.put<CredentialResponse>(this.base + suffix, {
      user: user,
      token: this.auth.currentUser().token
    }, header);
  }

  public deleteUser(id: number) {
    const suffix = `users/${id}.json`;
    const header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.auth.currentUser().token
      })
    };
    return this.http.delete<PlainResponse>(this.base + suffix, header);
  }

  public chartUserByRole() {
    const suffix = 'charts/user_by_role.json';
    const header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.auth.currentUser().token
      })
    };
    return this.http.get<ChartUserByRole[]>(this.base + suffix, header);
  }

  public materialPurchasing(request: MaterialPuchasingRequest) {
    const suffix = 'purchases.json';
    const header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.auth.currentUser().token
      })
    };
    return this.http.post<MaterialPuchasing>(this.base + suffix, request, header);
  }

  public materialIndex() {
    const suffix = 'materials.json';
    const header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.auth.currentUser().token
      })
    };
    return this.http.get<Material[]>(this.base + suffix, header);
  }

  public materialShow(slug: string) {
    const suffix = `materials/${slug}.json`;
    const header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.auth.currentUser().token
      })
    };
    return this.http.get<Material>(this.base + suffix, header);
  }

  public materialUpdate(slug: string, material: FormGroup) {
    const suffix = `materials/${slug}.json`;
    const header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.auth.currentUser().token
      })
    };
    return this.http.patch<Material>(this.base + suffix, material.value, header);
  }

  public provderIndex() {
    const suffix = 'providers.json';
    const header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.auth.currentUser().token
      })
    };
    return this.http.get<Provider[]>(this.base + suffix, header);
  }

  public purchasingGrowth() {
    const suffix = 'charts/purchasing_growth.json';
    const header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.auth.currentUser().token
      })
    };
    return this.http.get<PurchasingGrowth>(this.base + suffix, header);
  }

  public depreciationCreate(request: Depreciation) {
    const suffix = 'depreciations.json';
    const header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.auth.currentUser().token
      })
    };
    return this.http.post<DepreciationResponse>(this.base + suffix, request, header);
  }
}
