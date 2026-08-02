import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CategoryService {

  private baseUrl = 'http://localhost:8080/api/v1/categories';

  constructor(private http: HttpClient) {}

  createCategory(categoryData: any) {
    return this.http.post(`${this.baseUrl}/`, categoryData);
  }

  getAllCategories() {
    return this.http.get(`${this.baseUrl}/`);
  }

  getSingleCategory(id: number) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateCategory(id: number, categoryData: any) {
    return this.http.put(`${this.baseUrl}/${id}`, categoryData);
  }

  deleteCategory(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
