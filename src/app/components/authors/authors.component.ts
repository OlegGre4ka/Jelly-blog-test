import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {
authors:any=[];
  constructor(private apiService:ApiService) { }

  ngOnInit() {
    
    this.apiService.getUsersData().subscribe(
      data=>{
        console.log(data,'users')
      this.authors = [...data]
      }
    )
  }

}
