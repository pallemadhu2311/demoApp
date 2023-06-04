import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLoggedIn = false;

  userdata = {};

  // constructor(private router: Router) {
  //   // Check if the user is logged in
  //   const user = JSON.parse(localStorage.getItem('loggedInUser') || '{}');
  //   this.isLoggedIn = user && user.username && user.password; // Update the condition based on your user authentication logic
  //   console.log('isLoggedIn:', this.isLoggedIn);
  //   this.isLoggedIn = true;
  // }

  constructor(private router: Router, private auth:AuthService) {
    // Check if the user is logged in
    const user = JSON.parse(localStorage.getItem('loggedInUser') || '{}');
    this.isLoggedIn = user && user.username && user.password; // Update the condition based on your user authentication logic

    if (this.isLoggedIn) {
      // Refresh the current route to update the component's content
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      const currentUrl = this.router.url;
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigateByUrl(currentUrl);
      });
    }

    console.log("User Logged In");
    this.isLoggedIn = true;
  }


  ngOnInit(): void {
    this.auth.isLoggedIn$.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  logout() {
    this.auth.updateLoginStatus(false);
    localStorage.removeItem('loggedInUser');
    this.router.navigate(['/login']);
  }
}
