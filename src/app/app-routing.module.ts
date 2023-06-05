import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { AuthGuard } from './authguard.guard';
import { DashboardProfileComponent } from './dashboard-profile/dashboard-profile.component';

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
  }, // Update the route path to 'dashboard/profile',

  { path: '**', redirectTo: '/dashboard/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
