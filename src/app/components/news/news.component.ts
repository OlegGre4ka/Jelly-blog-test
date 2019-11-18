import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  posts: any = [];
  users: any = [];
  comments: any = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getCommentsData().subscribe(
      comments => {
        this.comments = comments
      }
    )

    this.apiService.getUsersData().pipe(
      switchMap(users => this.apiService.getPostsData()
        .pipe(
          // this pass both posts and users to the next observable in this chain
          map(posts => ({ posts, users }))
        ))
    ).subscribe(({ posts, users }) => {
      this.users = users;
      this.posts = posts;

      this.posts.map(post => {
        this.users.map(
          user => {
            if (user.id === post.author) {
              post.author = user.username;
            }
          })
        this.comments.map(
          comment => {
            if (comment.post === post.id) {
              post['comment'] = comment.body;
            }
          })
      })
    })
  }
}





