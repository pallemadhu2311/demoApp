import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { AuthGuard } from './authguard.guard';
import { DashboardProfileComponent } from './dashboard-profile/dashboard-profile.component';
import { DashboardNotificationsComponent } from './dashboard-notifications/dashboard-notifications.component';
import { DashboardAdduserComponent } from './dashboard-adduser/dashboard-adduser.component';
import { DashboardSearchUserComponent } from './dashboard-search-user/dashboard-search-user.component';
import { DashboardSendUpdatesComponent } from './dashboard-send-updates/dashboard-send-updates.component';
import { DashboardUsersReportsComponent } from './dashboard-users-reports/dashboard-users-reports.component';
import { DashboardComplaintsComponent } from './dashboard-complaints/dashboard-complaints.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contactus',
    component: ContactUsComponent,
  },
  {
    path: 'dashboard/home',
    component: DashboardHomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'dashboard/profile',
    component: DashboardProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'dashboard/notifications',
    component: DashboardNotificationsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: ' ',
    component: DashboardAdduserComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'dashboard/search-users',
    component: DashboardSearchUserComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'dashboard/send-updates',
    component: DashboardSendUpdatesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'dashboard/users-reports',
    component: DashboardUsersReportsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'dashboard/complaints',
    component: DashboardComplaintsComponent,
    canActivate: [AuthGuard],
  },

  { path: '**', redirectTo: '/dashboard/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
