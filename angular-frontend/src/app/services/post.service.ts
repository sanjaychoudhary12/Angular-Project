import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PostService {

  private baseUrl = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) {}

  createPost(userId: number, categoryId: number, postData: any) {
    return this.http.post(`${this.baseUrl}/user/${userId}/category/${categoryId}/posts`, postData);
  }

  getAllPosts() {
    return this.http.get(`${this.baseUrl}/posts`);
  }

  getSinglePost(id: number) {
    return this.http.get(`${this.baseUrl}/posts/${id}`);
  }

  updatePost(id: number, postData: any) {
    return this.http.put(`${this.baseUrl}/posts/${id}`, postData);
  }

  deletePost(id: number) {
    return this.http.delete(`${this.baseUrl}/posts/${id}`);
  }

  getPostsByUser(userId: number) {
    return this.http.get(`${this.baseUrl}/user/${userId}/posts`);
  }

  getPostsByCategory(categoryId: number) {
    return this.http.get(`${this.baseUrl}/category/${categoryId}/posts`);
  }

  searchPosts(keyword: string) {
    return this.http.get(`${this.baseUrl}/posts/search/${keyword}`);
  }

  uploadImage(postId: number, formData: FormData) {
    return this.http.post(`${this.baseUrl}/post/image/upload/${postId}`, formData);
  }
}
