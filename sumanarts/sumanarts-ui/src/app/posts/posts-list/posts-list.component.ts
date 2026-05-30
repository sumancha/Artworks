import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/app.state';
import { Observable } from 'rxjs';
import { PostState } from '../state/post.state';
import { getPosts } from '../state/post.select';
import { Post } from '../../../models/post';
import { NgFor, AsyncPipe } from '@angular/common';

@Component({
    selector: 'art-posts-list',
    templateUrl: './posts-list.component.html',
    styleUrl: './posts-list.component.css',
    imports: [NgFor, AsyncPipe]
})
export class PostsListComponent {
  posts$ !:Observable<Post[]>
  constructor(private store:Store<AppState>) { }
ngOnInit(): void {
  this.posts$ = this.store.select( getPosts);  }
}
