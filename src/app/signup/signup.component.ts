import { Component } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  Validators,
  FormGroup,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

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
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      id: [0],
      userName: ['', Validators.required],
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dob: ['', Validators.required],
      pno: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      password: ['', [Validators.required, Validators.minLength(2)]],
      cpassword: ['', Validators.required],
      agreeTerms: [false],
      role: ['customer'],
      registeredAt: [''],
      // Other form fields
    });
  }

  onSubmit() {
    if (this.signupForm.get('agreeTerms')?.value) {
      this.signupForm.get('id')?.setValue(this.signupForm.get('id')?.value + 1); // Increment the ID

      const currentDate = new Date();

      const formattedDate = currentDate.toLocaleString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });

      this.signupForm.get('registeredAt')?.setValue(formattedDate); // Set the registration date and time

      // API call to save user data
      this.data.saveUserData(this.signupForm.value).subscribe(
        (res) => {
          this.userData = res;

          console.log('User data saved successfully', this.userData);
          alert('Success');
          this.route.navigate(['/login']);
          this.signupForm.reset(); // Reset the form controls
        },
        (error) => {
          console.error('Failed to save user data', error);
          alert('Error occurred');
        }
      );
    } else {
      alert('Please agree to the terms');
    }
  }



}
