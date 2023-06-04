import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {
  userName!: string;

  ngOnInit(): void {
    const userJson = localStorage.getItem('loggedInUser');
    if (userJson) {
      const user = JSON.parse(userJson);
      this.userName = user && user.username ? user.username : '';
    }
  }
}
