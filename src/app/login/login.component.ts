import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private route: Router , private data : DataService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    const formValues = this.loginForm.value;
    const userName = formValues.userName;
    const password = formValues.password;
    console.log("Login Button Clicked");
    this.data.getLoginData(userName, password).subscribe(
      (res) => {
        if (res.length > 0) {
          // Login successful
          // You can store the user information in a service or local storage for future use
          // For example, if you have a UserService, you can set the user data like: this.userService.setLoggedInUser(res[0]);
          const user = res[0];

          localStorage.setItem('loggedInUser', JSON.stringify(user)); // Store the user information in local storage

          this.route.navigate(['/dashboard/home/']); // Navigate to the dashboard component
        } else {
          // Login failed
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
