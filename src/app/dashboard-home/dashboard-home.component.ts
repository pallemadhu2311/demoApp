import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {
  userName!: string;

  userRole!: string;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    const user = this.authService.loggedInUser;
    this.userName = user?.username || '';
    this.userRole = user?.role || '';
  }
}
