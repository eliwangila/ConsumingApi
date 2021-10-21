import { Injectable } from '@angular/core';
import { Post } from './posts'
import  {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl ='https://jsonplaceholder.typicode.com/posts'

  httpOptions={
    headers: new Headers({
       'Content-Type': 'application/json'})
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.apiUrl='https://jsonplaceholder.typicode.com/posts')
  }

  create(post: any): Observable<Post>{
    return this.httpClient.post<Post>(this.apiUrl='https://jsonplaceholder.typicode.com/posts',JSON.stringify(post))
  }
  delete(id:any){
    return this.httpClient.delete<Post>(this.apiUrl='https://jsonplaceholder.typicode.com/posts/'+id)
  }
}
