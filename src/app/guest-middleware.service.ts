import { Injectable } from '@angular/core';
import { Token } from './token';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class GuestMiddlewareService {
  private token: Token;

  constructor(
    private cookie: CookieService,
    private router: Router,
    private snackbar: MatSnackBar,
  ) {
    this.token = <Token>this.cookie.getAll();
  }

  public isNotAuthenticated(): boolean {
    if (!this.token.user_email || !this.token.user_name || !this.token.user_token) {
      return true;
    }

    this.router.navigate(['/dashboard']);
    this.snackbar.open('You already logged in', 'close', { duration: 5000 });
    return false;
  }

  canActivate(): boolean {
    return this.isNotAuthenticated();
  }
}
