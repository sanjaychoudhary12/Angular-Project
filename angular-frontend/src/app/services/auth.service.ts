import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private baseUrl = 'http://localhost:8080/api/v1/auth';

  private jwtToken: string = '';

  constructor(private http: HttpClient) {}

  login(loginData: any) {
    return this.http.post(`${this.baseUrl}/login`, loginData);
  }

  registerUser(userData: any) {
    return this.http.post(`${this.baseUrl}/register`, userData);
  }

  getCurrentUser() {
    return this.http.get(`${this.baseUrl}/current-user/`, {
      headers: { Authorization: 'Bearer ' + this.jwtToken }
    });
  }

  setToken(token: string) {
    this.jwtToken = token;
  }

  getToken() {
    return this.jwtToken;
  }
}
