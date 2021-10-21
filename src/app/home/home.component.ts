import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from '../posts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: Post[] = [];

  constructor(public postService: PostService) { }

  ngOnInit(): void {
    this.postService.getAll().subscribe((data: Post[]) =>{
      this.posts = data;
      console.log(this.posts);
    })
  };
  deletePost(id:any){
    this.postService.delete(id).subscribe(res => {
      this.posts = this.posts.filter(item => item.id !==id);
      console.log('Post deleted successfully');
    })
  }

}
