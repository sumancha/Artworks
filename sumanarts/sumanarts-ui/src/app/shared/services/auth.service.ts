import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http:HttpClient) { }
  authURL = environment.authUrl;

  createUser(formData:any){
    return this.http.post(this.authURL+'/signup',formData);
  }
  
}
