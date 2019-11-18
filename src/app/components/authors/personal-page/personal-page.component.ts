import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-personal-page',
  templateUrl: './personal-page.component.html',
  styleUrls: ['./personal-page.component.scss']
})
export class PersonalPageComponent implements OnInit {
  posts: any = [];
  users: any = [];
  comments: any = [];
  authorName: string;
  constructor(private router: Router, private apiService: ApiService, private route: ActivatedRoute) { }

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
      this.posts = this.posts.filter(post => {
        return post.author === this.route.snapshot.params['id'].slice(1)

      })
      this.posts.map(post => {
        this.users.map(
          user => {
            if (user.id === post.author) {
              post.author = user.username;
              this.authorName = user.username;
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

  moveToBack() {
    this.router.navigate(['authors'])
  }
}
