import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Credential } from './interfaces/credential';
import { CredentialResponse } from './interfaces/credential-response';
import { AuthService } from './auth.service';
import { ArrayResponse } from './array-response';
import { User } from './models/user';
import { PlainResponse } from './interfaces/plain-response';
import { ChartUserByRole } from './response/chart-user-by-role';

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
}
