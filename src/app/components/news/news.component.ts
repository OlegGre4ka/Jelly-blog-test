import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';

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
    this.apiService.getUsersData().subscribe(
      users => {
        this.users = [...users]
      }
    )

    this.apiService.getCommentsData().subscribe(
      comments => {
        this.comments = [...comments]
      }
    )

    this.apiService.getPostsData().subscribe(
      data => {
        this.posts = [...data];

        this.posts.map(post => {
          this.users.map(
            user => {
              if (user.id === post.author) {
                post.author = user.username;
              // if(post.author===user.id){
              //   setTimeout(
              //     ()=>post.author = user.username
              //     ,100
              //     )
              // }
           
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





