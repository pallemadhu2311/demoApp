import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard-profile',
  templateUrl: './dashboard-profile.component.html',
  styleUrls: ['./dashboard-profile.component.css'],
})
export class DashboardProfileComponent {
  userData: any;
  loggedInUsername: string | undefined = '';

  constructor(
    private authservice: AuthService,
    private dataservice: DataService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.loggedInUsername = this.authservice.loggedInUser.username ?? ''; // Set the loggedInUsername from the AuthService
    this.dataservice.getUsersData(this.loggedInUsername).subscribe(
      (response: any) => {
        console.log('API Response:', response); // Log the response for debugging
        if (Array.isArray(response) && response.length > 0) {
          this.userData = response[0]; // Assuming there is only one user per username
        } else {
          console.log('No data available for the logged-in user.');
        }
      },
      (error: any) => {
        console.error('Error retrieving user data:', error);
      }
    );
  }


}
