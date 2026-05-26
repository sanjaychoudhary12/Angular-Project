import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

  allUsers: any;
  singleUser: any;
  message: string = '';

  constructor(private http: HttpClient) {}

  // GET ALL USERS
  getAllUsers() {

    this.http.get('http://localhost:8080/api/v1/users/')
      .subscribe({

        next: (data) => {

          console.log(data);

          this.allUsers = data;
        },

        error: (err) => {

          console.log(err);
        }
      });
  }

  // GET SINGLE USER
  getSingleUser() {

    this.http.get('http://localhost:8080/api/v1/users/1')
      .subscribe({

        next: (data) => {

          console.log(data);

          this.singleUser = data;
        },

        error: (err) => {

          console.log(err);
        }
      });
  }

  // CREATE USER
  createUser() {

    const userData = {

      name: 'Shiva',
      email: 'shiva@gmail.com',
      password: '12345',
      about: 'Angular Frontend User'
    };

    this.http.post(
      'http://localhost:8080/api/v1/users/',
      userData
    ).subscribe({

      next: (data) => {

        console.log(data);

        this.message = 'User Created Successfully';
      },

      error: (err) => {

        console.log(err);
      }
    });
  }

  // UPDATE USER
  updateUser() {

    const updatedData = {

      name: 'Updated Shiva',
      email: 'updated@gmail.com',
      password: '12345',
      about: 'Updated From Angular'
    };

    this.http.put(
      'http://localhost:8080/api/v1/users/1',
      updatedData
    ).subscribe({

      next: (data) => {

        console.log(data);

        this.message = 'User Updated Successfully';
      },

      error: (err) => {

        console.log(err);
      }
    });
  }

  // DELETE USER
  deleteUser() {

    this.http.delete(
      'http://localhost:8080/api/v1/users/1'
    ).subscribe({

      next: (data) => {

        console.log(data);

        this.message = 'User Deleted Successfully';
      },

      error: (err) => {

        console.log(err);
      }
    });
  }
}