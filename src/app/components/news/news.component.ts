import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor(private apiService:ApiService) { }
posts:any=[];
  ngOnInit() {
    this.apiService.getPostsData().subscribe(
      data=>{
        console.log(data,'posts');
        this.posts = [...data];
      }
    )

    this.apiService.getUsersData().subscribe(
      data=>console.log(data,'users')
    )

    this.apiService.getCommentsData().subscribe(
      data=>console.log(data,'comments')
    )
  }

}
