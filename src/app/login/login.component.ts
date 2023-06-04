import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dataService: DataService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });

    if (this.authService.isUserLoggedIn()) {
      alert('User is already logged in');
      // return;
      this.router.navigate(['/dashboard/home']);
    }
  }

  onSubmit() {



    const formValues = this.loginForm.value;
    const userName = formValues.userName;
    const password = formValues.password;

    this.dataService.getLoginData().subscribe(
      (res) => {
        const matchingUser = res.find(
          (user: any) => user.userName === userName && user.password === password
        );

        if (matchingUser) {
          this.authService.updateLoginStatus(true, userName, password, matchingUser.role);
          this.router.navigate(['/dashboard/home']);
        } else {
          alert('Invalid username or password');
        }
      },
      (error) => {
        console.error('Failed to fetch login data:', error);
        alert('Error occurred');
      }
    );
  }
}
