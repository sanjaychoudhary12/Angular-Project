import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  allPosts: any;
  singlePost: any;
  userPosts: any;
  categoryPosts: any;
  searchedPosts: any;

  message: string = '';

  constructor(private postService: PostService) {}

  createPost() {
    const postData = {
      title: 'Angular Post',
      content: 'This post is created from Angular frontend',
      imageName: 'default.png',
      addedDate: new Date(),
      category: {},
      user: {}
    };

    this.postService.createPost(1, 1, postData).subscribe({
      next: (data) => {
        this.message = 'Post Created Successfully';
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  getAllPosts() {
    this.postService.getAllPosts().subscribe({
      next: (data) => {
        this.allPosts = data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  getSinglePost() {
    this.postService.getSinglePost(1).subscribe({
      next: (data) => {
        this.singlePost = data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  updatePost() {
    const updatedPost = {
      title: 'Updated Angular Post',
      content: 'Updated content from Angular',
      imageName: 'default.png',
      addedDate: new Date(),
      category: {},
      user: {}
    };

    this.postService.updatePost(1, updatedPost).subscribe({
      next: (data) => {
        this.message = 'Post Updated Successfully';
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  deletePost() {
    this.postService.deletePost(1).subscribe({
      next: (data) => {
        this.message = 'Post Deleted Successfully';
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  getPostsByUser() {
    this.postService.getPostsByUser(1).subscribe({
      next: (data) => {
        this.userPosts = data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  getPostsByCategory() {
    this.postService.getPostsByCategory(1).subscribe({
      next: (data) => {
        this.categoryPosts = data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  searchPost() {
    this.postService.searchPosts('angular').subscribe({
      next: (data) => {
        this.searchedPosts = data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  uploadImage(event: any) {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('image', file);

    this.postService.uploadImage(1, formData).subscribe({
      next: (data) => {
        this.message = 'Image Uploaded Successfully';
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
