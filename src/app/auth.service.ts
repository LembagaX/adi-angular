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

  public  isAuthenticated(): boolean {
    return this.webStorage.has('user');
  }

  public currentUser(): User {
    return this.webStorage.get('user');
  }
}
