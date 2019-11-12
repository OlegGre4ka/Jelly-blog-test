import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // getData(): Observable<any> {
  //   return this.http.get(`http://my-json-server.typicode.com/orlovskyalex/jellyfish-fake-rest-server `)
  // }

  getPostsData(): Observable<any> {
    return this.http.get(`http://localhost:4000/posts`)
  }
  getUsersData(): Observable<any> {
    return this.http.get(`http://localhost:4000/users`)
  }
  getCommentsData(): Observable<any> {
    return this.http.get(`http://localhost:4000/comments`)
  }

}
