import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  loginResponse: any;
  registeredUser: any;
  currentUser: any;
  authMessage: string = '';

  constructor(private authService: AuthService) {}

  login() {
    const loginData = {
      username: 'admin@gmail.com',
      password: 'admin123'
    };

    this.authService.login(loginData).subscribe({
      next: (data: any) => {
        this.loginResponse = data;
        this.authService.setToken(data.token);
        this.authMessage = 'Login Successful';
      },
      error: (err) => {
        console.log(err);
        this.authMessage = 'Login Failed';
      }
    });
  }

  registerUser() {
    const userData = {
      name: 'Angular User',
      email: 'angular@gmail.com',
      password: '12345',
      about: 'Registered from Angular'
    };

    this.authService.registerUser(userData).subscribe({
      next: (data) => {
        this.registeredUser = data;
        this.authMessage = 'Registration Successful';
      },
      error: (err) => {
        console.log(err);
        this.authMessage = 'Registration Failed';
      }
    });
  }

  getCurrentUser() {
    this.authService.getCurrentUser().subscribe({
      next: (data) => {
        this.currentUser = data;
        this.authMessage = 'Current User Loaded';
      },
      error: (err) => {
        console.log(err);
        this.authMessage = 'Failed to Load Current User';
      }
    });
  }
}
