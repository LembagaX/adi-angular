import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Credential } from './credential';
import { CredentialResponse } from './credential-response';

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
    const suffix = 'users/generate.json';
    const header = {
      headers: new HttpHeaders({
        'Content-type' : 'application/json'
      })
    };

    return this.http.post<CredentialResponse>(this.base + suffix, body, header);
  }
}
