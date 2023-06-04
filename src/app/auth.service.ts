import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();
  loggedInUser: { username?: string, password?: string } = {};

  constructor() {
    this.isLoggedInSubject.next(this.getLoginStatusFromLocalStorage());
  }

  public getLoginStatusFromLocalStorage(): boolean {
    try {
      const user = JSON.parse(localStorage.getItem('loggedInUser') || '');
      if (user && user.username && user.password) {
        this.loggedInUser = user;
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error('Error parsing JSON from localStorage:', error);
      return false;
    }
  }

  private setLoginStatusInLocalStorage(isLoggedIn: boolean): void {
    if (isLoggedIn) {
      const user = {
        username: this.loggedInUser.username || '',
        password: this.loggedInUser.password || '',
      };
      localStorage.setItem('loggedInUser', JSON.stringify(user));
    } else {
      localStorage.removeItem('loggedInUser');
    }
  }

  updateLoginStatus(isLoggedIn: boolean, username?: string, password?: string): void {
    if (username && password) {
      this.loggedInUser.username = username;
      this.loggedInUser.password = password;
    }
    this.setLoginStatusInLocalStorage(isLoggedIn);
    this.isLoggedInSubject.next(isLoggedIn);
  }

  clearLocalStorage(): void {
    this.loggedInUser = {};
    localStorage.removeItem('loggedInUser');
    this.isLoggedInSubject.next(false);
  }
}
