import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})

export class GuestGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private snackbar: MatSnackBar
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.auth.isAuthenticated()) {
      this.snackbar.open('You have already Signed in', 'close', { duration: 2000 });
    } else {
      this.snackbar.open('You need to Sign in first', 'close', { duration: 2000 });
    }
    return !this.auth.isAuthenticated();
  }
}
