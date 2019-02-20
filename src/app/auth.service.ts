import { Inject, Injectable } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { User } from './interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    @Inject(SESSION_STORAGE) private webStorage: StorageService
  ) {}

  public login(user: User) {
    this.webStorage.set('user', user);
  }

  public logout() {
    this.webStorage.remove('user');
  }

  public isAuthenticated(): boolean {
    return this.webStorage.has('user');
  }

  public currentUser(): User {
    return this.webStorage.get('user');
  }

  public role(): string {
    switch (this.currentUser().role_id) {
      case 1:
        return 'Administrator';
        break;
      case 2:
        return 'Warehouse Staff';
        break;
      case 3:
        return 'Operational Staff';
        break;
    }
  }

  public isAdmin(): boolean {
    if (this.currentUser().role_id === 1) {
      return true;
    } else {
      return false;
    }
  }

  public isWarehouse(): boolean {
    if (this.currentUser().role_id === 2) {
      return true;
    } else {
      return false;
    }
  }

  public isManager(): boolean {
    if (this.currentUser().role_id === 3) {
      return true;
    } else {
      return false;
    }
  }
}
