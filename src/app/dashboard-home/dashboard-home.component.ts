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

  showDashboardProfileComponent:boolean=false;
  showDashboardNotificationsComponent:boolean=false;
  showDashboardAddUserComponent:boolean=false;
  showDashboardSearchUserComponent:boolean = false;
  showDashboardSendUpdatesComponent:boolean = false;
  showDashboardUsersReportsComponent:boolean = false;
  showDashboardComplaintsComponent:boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    const user = this.authService.loggedInUser;
    this.userName = user?.username || '';
    this.userRole = user?.role || '';
  }

  loadProfileComponent(){
    this.showDashboardProfileComponent = true;
    this.showDashboardNotificationsComponent = false;
    this.showDashboardAddUserComponent = false;
    this.showDashboardSearchUserComponent = false;
    this.showDashboardSendUpdatesComponent = false;
    this.showDashboardUsersReportsComponent = false;
    this.showDashboardComplaintsComponent = false;

  }

  loadDashboardNotificationsComponent(){
    this.showDashboardNotificationsComponent = true;
    this.showDashboardProfileComponent = false;
    this.showDashboardAddUserComponent = false;
    this.showDashboardSearchUserComponent = false;
    this.showDashboardSendUpdatesComponent = false;
    this.showDashboardUsersReportsComponent = false;
    this.showDashboardComplaintsComponent = false;
  }

  loadDashboardAddUser(){
    this.showDashboardAddUserComponent = true;
    this.showDashboardNotificationsComponent = false;
    this.showDashboardProfileComponent = false;
    this.showDashboardSearchUserComponent = false;
    this.showDashboardSendUpdatesComponent = false;
    this.showDashboardUsersReportsComponent = false;
    this.showDashboardComplaintsComponent = false;

  }

  loadDashboardSearchUser(){
    this.showDashboardAddUserComponent = false;
    this.showDashboardNotificationsComponent = false;
    this.showDashboardProfileComponent = false;
    this.showDashboardSearchUserComponent = true;
    this.showDashboardSendUpdatesComponent = false;
    this.showDashboardUsersReportsComponent = false;
    this.showDashboardComplaintsComponent = false;
  }

  loadDashboardSendUpdates(){
    this.showDashboardAddUserComponent = false;
    this.showDashboardNotificationsComponent = false;
    this.showDashboardProfileComponent = false;
    this.showDashboardSearchUserComponent = false;
    this.showDashboardSendUpdatesComponent = true;
    this.showDashboardUsersReportsComponent = false;
    this.showDashboardComplaintsComponent = false;
  }

  loadDashboardUsersReports(){
    this.showDashboardAddUserComponent = false;
    this.showDashboardNotificationsComponent = false;
    this.showDashboardProfileComponent = false;
    this.showDashboardSearchUserComponent = false;
    this.showDashboardSendUpdatesComponent = false;
    this.showDashboardUsersReportsComponent = true;
    this.showDashboardComplaintsComponent = false;
  }

  loadDashboardComplaiints(){
    this.showDashboardAddUserComponent = false;
    this.showDashboardNotificationsComponent = false;
    this.showDashboardProfileComponent = false;
    this.showDashboardSearchUserComponent = false;
    this.showDashboardSendUpdatesComponent = false;
    this.showDashboardUsersReportsComponent = false;
    this.showDashboardComplaintsComponent = true;
  }

}
