import { Component } from '@angular/core';
import { UserComponent } from './user/user.component';
import { PostComponent } from './post/post.component';
import { CommentComponent } from './comment/comment.component';
import { CategoryComponent } from './category/category.component';
import { AuthComponent } from './auth/auth.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    UserComponent,
    PostComponent,
    CommentComponent,
    CategoryComponent,
    AuthComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
}
