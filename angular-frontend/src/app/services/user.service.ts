import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class UserService {

  private baseUrl = 'http://localhost:8080/api/v1/users';

  constructor(private http: HttpClient) {}

  getAllUsers() {
    return this.http.get(`${this.baseUrl}/`);
  }

  getSingleUser(id: number) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createUser(userData: any) {
    return this.http.post(`${this.baseUrl}/`, userData);
  }

  updateUser(id: number, userData: any) {
    return this.http.put(`${this.baseUrl}/${id}`, userData);
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
