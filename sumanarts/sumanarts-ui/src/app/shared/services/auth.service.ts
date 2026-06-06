import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TOKEN_KEY } from 'src/costant';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  authURL = environment.authUrl;

  createUser(formData: any) {
    return this.http.post(this.authURL + '/signup', formData);
  }
  signIn(formData: any) {
    return this.http.post(this.authURL + '/signin', formData);
  }
  // checks if user loggedin via locasl storage
  isLoggedIn() {
    return localStorage.getItem(TOKEN_KEY) != null ? true : false;
  }

  deleteToken() {
    localStorage.removeItem(TOKEN_KEY);
  }

  saveToken(token: string) {
    localStorage.setItem(TOKEN_KEY, token);
  }

  getToken() {
    return localStorage.getItem(TOKEN_KEY);
  }

  getClaims() {
    return JSON.parse(window.atob(this.getToken()!.split('.')[1]));
  }
}
