import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Category } from './response/category';
import { Category as Request } from './request/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  protected base: string;

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) {
    this.base = 'http://adi-server.herokuapp.com/';
  }

  public index() {
    const suffix = 'categories.json';
    const header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.auth.currentUser().token
      })
    };
    return this.http.get<Category[]>(this.base + suffix, header);
  }

  public create(request: Request) {
    const suffix = 'categories.json';
    const header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.auth.currentUser().token
      })
    };
    return this.http.post<Category>(this.base + suffix, request, header);
  }

  public update(request: Request, category: Category) {
    const suffix = `categories/${category.slug}.json`;
    const header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.auth.currentUser().token
      })
    };
    return this.http.patch<Category>(this.base + suffix, request, header);
  }

  public destroy(category: Category) {
    const suffix = `categories/${category.slug}.json`;
    const header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.auth.currentUser().token
      })
    };
    return this.http.delete<Category>(this.base + suffix, header);
  }
}
