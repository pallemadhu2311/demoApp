import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient, private route:Router) { }

  private apiUrl = 'http://localhost:3000';

  saveUserData(userData: any) {
    return this.http.post(this.apiUrl+'/UsersData', userData);
  }


}
