import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router, CanActivate } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Token } from './token';

@Injectable({
  providedIn: 'root'
})
export class AuthMiddlewareService implements CanActivate {
  private token: Token;

  constructor(
    private cookie: CookieService,
    private router: Router,
    private snackbar: MatSnackBar,
  ) {
    this.token = <Token>this.cookie.getAll();
  }

  public isAuthenticated(): boolean {
    if (this.token.user_email && this.token.user_name && this.token.user_token) {
      return true;
    }

    this.router.navigate(['/login']);
    this.snackbar.open('You need to login first', 'close', { duration: 5000 });
    return false;
  }

  canActivate(): boolean {
    return this.isAuthenticated();
  }
}
