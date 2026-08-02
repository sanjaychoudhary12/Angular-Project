import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {

  createdComment: any;
  commentMessage: string = '';

  constructor(private commentService: CommentService) {}

  createComment() {
    const commentData = {
      content: 'This comment is created from Angular'
    };

    this.commentService.createComment(1, commentData).subscribe({
      next: (data) => {
        this.createdComment = data;
        this.commentMessage = 'Comment Created Successfully';
      },
      error: (err) => {
        console.log(err);
        this.commentMessage = 'Failed to Create Comment';
      }
    });
  }

  deleteComment() {
    this.commentService.deleteComment(1).subscribe({
      next: (data) => {
        this.commentMessage = 'Comment Deleted Successfully';
      },
      error: (err) => {
        console.log(err);
        this.commentMessage = 'Failed to Delete Comment';
      }
    });
  }
}
