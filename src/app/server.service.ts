import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Credential } from './interfaces/credential';
import { CredentialResponse } from './interfaces/credential-response';
import { PlainResponse } from './interfaces/plain-response';
import { Token } from './interfaces/token';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  protected base: String;
  constructor(private http: HttpClient) {
    this.base = 'http://adi-server.herokuapp.com/';
  }

  /**
   * generateToken
   */
  public generateToken(body: Credential): Observable<CredentialResponse> {
    const suffix = 'users/token.json';
    const header = {
      headers: new HttpHeaders({
        'Content-type' : 'application/json'
      })
    };

    return this.http.post<CredentialResponse>(this.base + suffix, body, header);
  }

  /**
   * checkToken
   */
  public checkToken(token: Token) {
    const suffix = 'users/check.json';
    const header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    };

    return this.http.post<PlainResponse>(this.base + suffix, token, header);
  }
}
