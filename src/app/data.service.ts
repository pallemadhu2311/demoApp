import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient, private route:Router) { }

  private apiUrl = 'http://localhost:3000';


//For saving the User Details like email , pass , username , fullname , dob, pno
  saveUserData(userData: any): Observable<any> {
    const url = `${this.apiUrl}/UsersData`;
    return this.http.post(url, userData);
  }

// for saving the user login details only like role , username , password
  saveLoginData(loginData: any): Observable<any> {
    const url = `${this.apiUrl}/loginData`;
    return this.http.post(url, loginData);
  }

}
