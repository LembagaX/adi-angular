import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { MatSnackBar } from '@angular/material';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ManagerGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private snackbar: MatSnackBar
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.auth.isManager()) {
      return true;
    } else {
      this.snackbar.open('Access Forbidden', 'close', { duration: 2000 });
      return false;
    }
  }
}
