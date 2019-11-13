import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {
  authors: any = [];
  constructor(private apiService: ApiService, private router: Router, ) { }

  ngOnInit() {

    this.apiService.getUsersData().subscribe(
      data => {
        this.authors = [...data]
      }
    )
  }

  goToPersonalPage(id) {
    this.router.navigate([`authors/:${id}`])
  }
}
