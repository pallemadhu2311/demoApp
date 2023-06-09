import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  userData = {};

  signupForm!: FormGroup;

  constructor(
    private data: DataService,
    private route: Router,
    private fb: FormBuilder,
    private authservice:AuthService
  ) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({

      userName: ['', Validators.required],
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dob: ['', Validators.required],
      pno: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      cpassword: ['', Validators.required],
      agreeTerms: [false],
      role: ['customer'],
      registeredAt: [''],
      isActive:[false],
      // Other form fields
    });

    if (this.authservice.isUserLoggedIn()) {
      alert('User is already logged in');
      // Redirect to a different page or perform any other action
      this.route.navigate(['/dashboard/home']);

    }
  }

  onSubmit() {



    if (this.signupForm.get('agreeTerms')?.value) {
      // this.signupForm.get('id')?.setValue(this.signupForm.get('id')?.value + 1); // Increment the ID

      const currentDate = new Date();

      const formattedDate = currentDate.toLocaleString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });

      const formValues = this.signupForm.value;

      const loginData = {
        id: formValues.id,
        userName: formValues.userName,
        password: formValues.password,
        role: formValues.role, // Include the role field from formValues
      };

      this.signupForm.get('registeredAt')?.setValue(formattedDate); // Set the registration date and time

      this.data.saveLoginData(loginData).subscribe(
        () => {
          console.log('Login data saved successfully');
          // After login data is saved, proceed to save user data
          this.saveUserData();
        }
      );
    }
  }

  saveUserData() {
    const userData = this.signupForm.value;
    this.data.saveUserData(userData).subscribe(
      (res) => {
        this.userData = res;
        console.log('User data saved successfully', this.userData);
        alert('Success');
        this.route.navigate(['/login']);
        this.signupForm.reset(); // Reset the form controls
      }
    );
  }
}
