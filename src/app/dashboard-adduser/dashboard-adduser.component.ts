import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-adduser',
  templateUrl: './dashboard-adduser.component.html',
  styleUrls: ['./dashboard-adduser.component.css']
})
export class DashboardAdduserComponent implements OnInit {
  dashboardRegistrationForm!: FormGroup;
  formSubmitted = false;


  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.dashboardRegistrationForm = this.formBuilder.group({
      userName: ['', Validators.required],
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dob: ['', Validators.required],
      pno: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]{10}$'),
          Validators.minLength(10)
        ]
      ],
      password: ['', [Validators.required, Validators.minLength(4)]],
      role: ['', Validators.required],
      address: ['', Validators.required],
      isActive: new FormControl(false),
      registeredAt: ['']
    });

  }

  submitForm(): void {
    if (this.dashboardRegistrationForm.valid) {
      const userData = { ...this.dashboardRegistrationForm.value };

      // Format dob field as "DD-MMM-YYYY"
      const dobDate = new Date(userData.dob);
      const dobFormatted = dobDate.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      });
      userData.dob = dobFormatted;

      // Format registeredAt field as "DD/MM/YYYY h:mm A"
      const registeredAtDate = new Date();
      const registeredAtFormatted = registeredAtDate.toLocaleString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
      userData.registeredAt = registeredAtFormatted;

      this.dataService.saveUserData(userData).subscribe(
        response => {
          // Handle successful submission
          console.log('User data saved:', response);
          alert('User Created Successfully');

          // Save login data
          const loginData = {
            id: response.id,
            userName: userData.userName,
            password: userData.password,
            role: userData.role
          };

          this.dataService.saveLoginData(loginData).subscribe(
            loginResponse => {
              // Handle successful login data submission
              console.log('Login data saved:', loginResponse);

              // Reset form and navigate to desired route
              this.formSubmitted = true;
              this.router.navigate(['dashboard/add-user']);
              this.dashboardRegistrationForm.reset();
            },
            loginError => {
              // Handle error saving login data
              console.error('Error saving login data:', loginError);
            }
          );
        }
      );


    } else {
      // Mark form fields as touched to display validation errors
      this.dashboardRegistrationForm.markAllAsTouched();
    }
  }
}
