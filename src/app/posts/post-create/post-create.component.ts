import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Post } from '../post.model';
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {
  enteredTitle = '';
  enteredContent = '';
  // @Output() postCreated = new EventEmitter<Post>();

  constructor(public postsService: PostsService) { }

  ngOnInit() {
  }

  onAddPost(form: NgForm) {
    // this.newPost = postInput.value;
    // this.newPost = this.enteredValue;
    if (form.invalid) {
      return;
    }

    const post: Post = {
      title: form.value.title,
      content: form.value.content
      // title: this.enteredTitle,
      // content: this.enteredContent
    };
    // this.postCreated.emit(post);
    // form.value.title = '';
    // form.value.content = '';
    // this.enteredTitle = '';
    // this.enteredContent = '';
    form.resetForm();
    this.postsService.addPost(form.value.title, form.value.content);
  }

}
