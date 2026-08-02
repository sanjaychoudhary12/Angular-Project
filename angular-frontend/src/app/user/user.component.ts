import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  allUsers: any;
  singleUser: any;

  userName = '';
  userEmail = '';
  userPassword = '';
  userAbout = '';

  message: string = '';

  constructor(private userService: UserService) {}

  getAllUsers() {
    this.userService.getAllUsers().subscribe({
      next: (data) => {
        this.allUsers = data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  getSingleUser() {
    this.userService.getSingleUser(1).subscribe({
      next: (data) => {
        this.singleUser = data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  createUser() {
    const userData = {
      name: this.userName,
      email: this.userEmail,
      password: this.userPassword,
      about: this.userAbout
    };

    this.userService.createUser(userData).subscribe({
      next: (data) => {
        this.message = 'User Created Successfully';
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  updateUser() {
    const updatedData = {
      name: 'Updated Shiva',
      email: 'updated@gmail.com',
      password: '12345',
      about: 'Updated From Angular'
    };

    this.userService.updateUser(1, updatedData).subscribe({
      next: (data) => {
        this.message = 'User Updated Successfully';
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  deleteUser() {
    this.userService.deleteUser(1).subscribe({
      next: (data) => {
        this.message = 'User Deleted Successfully';
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
