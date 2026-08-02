import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  allCategories: any;
  singleCategory: any;
  createdCategory: any;
  categoryMessage: string = '';

  constructor(private categoryService: CategoryService) {}

  createCategory() {
    const categoryData = {
      categoryTitle: 'Angular Category',
      categoryDescription: 'Created from Angular Frontend'
    };

    this.categoryService.createCategory(categoryData).subscribe({
      next: (data) => {
        this.createdCategory = data;
        this.categoryMessage = 'Category Created Successfully';
      },
      error: (err) => {
        console.log(err);
        this.categoryMessage = 'Failed to Create Category';
      }
    });
  }

  getAllCategories() {
    this.categoryService.getAllCategories().subscribe({
      next: (data) => {
        this.allCategories = data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  getSingleCategory() {
    this.categoryService.getSingleCategory(1).subscribe({
      next: (data) => {
        this.singleCategory = data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  updateCategory() {
    const updatedCategory = {
      categoryTitle: 'Updated Angular Category',
      categoryDescription: 'Updated from Angular'
    };

    this.categoryService.updateCategory(1, updatedCategory).subscribe({
      next: (data) => {
        this.categoryMessage = 'Category Updated Successfully';
      },
      error: (err) => {
        console.log(err);
        this.categoryMessage = 'Failed to Update Category';
      }
    });
  }

  deleteCategory() {
    this.categoryService.deleteCategory(1).subscribe({
      next: (data) => {
        this.categoryMessage = 'Category Deleted Successfully';
      },
      error: (err) => {
        console.log(err);
        this.categoryMessage = 'Failed to Delete Category';
      }
    });
  }
}
