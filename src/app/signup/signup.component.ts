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
  signupData = {
    id: 0,
    userName: '',
    fullName: '',
    email: '',
    dob: '',
    pno: '',
    password: '',
    cpassword: '',
    agreeTerms: false,
    role: 'customer',
    registeredAt: '',
    // Other form fields
  };

  constructor(private data: DataService, private route: Router) {}

  signUp() {
    if (this.signupData.agreeTerms) {

      this.signupData.id++; // Increment the ID
      this.signupData.registeredAt = new Date().toLocaleString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      }); // Set the registration date and time

      //API call SaveUserData
      this.data.saveUserData(this.signupData).subscribe((res) => {
        this.userData = res;
        // this.signupData.resetForm()
        console.log('User data saved successfully', this.userData);
        alert("Success");
        this.route.navigate(['/login']);
        // Reset the form controls
      });
    } else {
      alert('Please agree to the terms');
    }
  }
}
