import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router, private authService: AuthService) {}

  title = 'demoApp';

  ngOnInit(): void {
    const isLoggedIn = this.authService.isUserLoggedIn();
    if (isLoggedIn) {
      this.router.navigate(['/dashboard/home']);
    }
  }
}
