import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CommentService {

  private baseUrl = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) {}

  createComment(postId: number, commentData: any) {
    return this.http.post(`${this.baseUrl}/post/${postId}/comments`, commentData);
  }

  deleteComment(id: number) {
    return this.http.delete(`${this.baseUrl}/comments/${id}`);
  }
}
