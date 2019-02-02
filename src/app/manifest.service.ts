import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Manifest } from './response/manifest';
import { Manifest as Request } from './request/manifest';
import { Manufacture } from './response/manufacture';

@Injectable({
  providedIn: 'root'
})
export class ManifestService {
  protected base: string;

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) {
    this.base = 'http://adi-server.herokuapp.com/';
  }

  public index(manufacture: Manufacture) {
    const suffix = `manufactures/${manufacture.code}.json`;
    const header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.auth.currentUser().token
      })
    };
    return this.http.get<Manifest[]>(this.base + suffix, header);
  }

  public create(manufacture: Manufacture, body: Request) {
    const suffix = `manufactures/${manufacture.code}/manifests.json`;
    const header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.auth.currentUser().token
      })
    };
    return this.http.post<Manifest>(this.base + suffix, body, header);
  }

  public destroy(manufacture: Manufacture, manifest: Manifest) {
    const suffix = `manufactures/${manufacture.code}/manifests/${manifest.id}.json`;
    const header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.auth.currentUser().token
      })
    };
    return this.http.delete<Manifest>(this.base + suffix, header);
  }
}
