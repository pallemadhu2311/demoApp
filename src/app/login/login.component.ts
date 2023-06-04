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
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private route: Router , private data : DataService , private auth:AuthService) {}

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

    this.data.getLoginData(userName, password).subscribe(
      (res) => {
        if (res.length > 0) {
          const user = res[0];
          localStorage.setItem('loggedInUser', JSON.stringify(user));

          this.auth.updateLoginStatus(true); // Update login status in AuthService

          this.route.navigate(['/dashboard/home']); // Redirect to localhost:4200/dashboard/home
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
