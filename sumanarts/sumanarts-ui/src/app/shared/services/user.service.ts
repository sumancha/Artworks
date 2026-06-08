import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) {}

  getUserProfile() {
    //Suman TODO interceptor not working
    const reqHeader = new HttpHeaders({
      Authorization: 'Bearer ' + this.authService.getToken(),
    });
    return this.http.get(environment.authUrl + '/userprofile', {
      headers: reqHeader,
    });
  }

  getImagefiles() {
    const reqHeader = new HttpHeaders({
      Authorization: 'Bearer ' + this.authService.getToken(),
    });
    return this.http.get(environment.authUrl + '/fileNames', {
      headers: reqHeader,
    });
  }
}
