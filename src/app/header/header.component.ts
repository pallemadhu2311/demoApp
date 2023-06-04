import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.getLoginStatusFromLocalStorage();
    this.authService.isLoggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
      console.log('isLoggedIn:', this.isLoggedIn);
    });
  }

  logout() {
    this.authService.updateLoginStatus(false);
    this.authService.clearLocalStorage();
    this.router.navigate(['/login']);
  }
}
