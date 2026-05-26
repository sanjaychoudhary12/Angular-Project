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

  // =========================
  // USER VARIABLES
  // =========================

  allUsers: any;
  singleUser: any;

  // =========================
  // POST VARIABLES
  // =========================

  allPosts: any;
  singlePost: any;
  userPosts: any;
  categoryPosts: any;
  searchedPosts: any;

  // =========================
  // TEST API VARIABLE
  // =========================

  backendMessage: string = '';

  // =========================
  // COMMON MESSAGE
  // =========================

  message: string = '';

  constructor(private http: HttpClient) {}



  // =====================================
  // TEST BACKEND CONNECTION
  // =====================================

  testBackendConnection() {

    this.http.get(
      'http://localhost:8080/api/test',
      { responseType: 'text' }
    ).subscribe({

      next: (data) => {

        console.log(data);

        this.backendMessage = data;
      },

      error: (err) => {

        console.log(err);

        this.backendMessage = 'Backend Connection Failed';
      }
    });
  }



  // =====================================
  // USER METHODS
  // =====================================

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



  // =====================================
  // POST METHODS
  // =====================================

  // CREATE POST
  createPost() {

    const postData = {

      title: 'Angular Post',
      content: 'This post is created from Angular frontend',
      imageName: 'default.png',
      addedDate: new Date(),
      category: {},
      user: {}
    };

    this.http.post(
      'http://localhost:8080/api/v1/user/1/category/1/posts',
      postData
    ).subscribe({

      next: (data) => {

        console.log(data);

        this.message = 'Post Created Successfully';
      },

      error: (err) => {

        console.log(err);
      }
    });
  }

  // GET ALL POSTS
  getAllPosts() {

    this.http.get(
      'http://localhost:8080/api/v1/posts'
    ).subscribe({

      next: (data) => {

        console.log(data);

        this.allPosts = data;
      },

      error: (err) => {

        console.log(err);
      }
    });
  }

  // GET SINGLE POST
  getSinglePost() {

    this.http.get(
      'http://localhost:8080/api/v1/posts/1'
    ).subscribe({

      next: (data) => {

        console.log(data);

        this.singlePost = data;
      },

      error: (err) => {

        console.log(err);
      }
    });
  }

  // UPDATE POST
  updatePost() {

    const updatedPost = {

      title: 'Updated Angular Post',
      content: 'Updated content from Angular',
      imageName: 'default.png',
      addedDate: new Date(),
      category: {},
      user: {}
    };

    this.http.put(
      'http://localhost:8080/api/v1/posts/1',
      updatedPost
    ).subscribe({

      next: (data) => {

        console.log(data);

        this.message = 'Post Updated Successfully';
      },

      error: (err) => {

        console.log(err);
      }
    });
  }

  // DELETE POST
  deletePost() {

    this.http.delete(
      'http://localhost:8080/api/v1/posts/1'
    ).subscribe({

      next: (data) => {

        console.log(data);

        this.message = 'Post Deleted Successfully';
      },

      error: (err) => {

        console.log(err);
      }
    });
  }

  // GET POSTS BY USER
  getPostsByUser() {

    this.http.get(
      'http://localhost:8080/api/v1/user/1/posts'
    ).subscribe({

      next: (data) => {

        console.log(data);

        this.userPosts = data;
      },

      error: (err) => {

        console.log(err);
      }
    });
  }

  // GET POSTS BY CATEGORY
  getPostsByCategory() {

    this.http.get(
      'http://localhost:8080/api/v1/category/1/posts'
    ).subscribe({

      next: (data) => {

        console.log(data);

        this.categoryPosts = data;
      },

      error: (err) => {

        console.log(err);
      }
    });
  }

  // SEARCH POST
  searchPost() {

    this.http.get(
      'http://localhost:8080/api/v1/posts/search/angular'
    ).subscribe({

      next: (data) => {

        console.log(data);

        this.searchedPosts = data;
      },

      error: (err) => {

        console.log(err);
      }
    });
  }

  // UPLOAD IMAGE
  uploadImage(event: any) {

    const file = event.target.files[0];

    const formData = new FormData();

    formData.append('image', file);

    this.http.post(
      'http://localhost:8080/api/v1/post/image/upload/1',
      formData
    ).subscribe({

      next: (data) => {

        console.log(data);

        this.message = 'Image Uploaded Successfully';
      },

      error: (err) => {

        console.log(err);
      }
    });
  }

}
