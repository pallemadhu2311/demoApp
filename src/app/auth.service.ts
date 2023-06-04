import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);

  isLoggedIn$ = this.isLoggedInSubject.asObservable();
  loggedInUser: { username?: string; password?: string; role?: string } = {};

  constructor() {
    this.isLoggedInSubject.next(this.getLoginStatusFromLocalStorage());
  }

  public getLoginStatusFromLocalStorage(): boolean {
    try {
      const isLoggedIn = JSON.parse(
        localStorage.getItem('isLoggedIn') || 'false'
      );
      const user = JSON.parse(localStorage.getItem('loggedInUser') || '{}');
      if (isLoggedIn && user && user.username && user.password && user.role) {
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
    localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
    if (isLoggedIn) {
      const user = {
        username: this.loggedInUser.username || '',
        password: this.loggedInUser.password || '',
        role: this.loggedInUser.role || '',
      };
      localStorage.setItem('loggedInUser', JSON.stringify(user));
    } else {
      localStorage.removeItem('loggedInUser');
    }
  }

  updateLoginStatus(
    isLoggedIn: boolean,
    username?: string,
    password?: string,
    role?: string
  ): void {
    if (username && password) {
      this.loggedInUser.username = username;
      this.loggedInUser.password = password;
      this.loggedInUser.role = role !== undefined ? role : '';
    }
    this.setLoginStatusInLocalStorage(isLoggedIn);
    this.isLoggedInSubject.next(isLoggedIn);
  }

  clearLocalStorage(): void {
    localStorage.clear();
    this.loggedInUser = {};
    this.isLoggedInSubject.next(false);
  }

  logout() {
    // Clear the local storage
    this.clearLocalStorage();

    // Code snippet
    // Update the user's login status
    this.updateLoginStatus(false);
    // Use code with caution. Learn more
  }

  isUserLoggedIn(): boolean {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') || '{}');
    return loggedInUser && loggedInUser.username && loggedInUser.password;
  }
}
