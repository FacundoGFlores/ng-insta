import { Component } from '@angular/core';
import { SearchService } from './app.service';
import { Post } from './post.model';

import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>
        Ng Insta Search
      </h1>
      <hr>
      <div class="input-group>">
        <input type="text" class="form-control" placeholder="Type here" (input)="keyword$.next($event.target.value)">
      </div>
      <ul class="list-group" style="margin-top: 5px">
        <li class="list-group-item" *ngFor="let item of data">{{item.title}}</li>
      </ul>
    </div>
    
  `,
  styles: []
})
export class AppComponent {
  data: Array<Post> = [];

  // This variable is used to be output and input from the event
  keyword$ = new Subject();

  constructor(private searchService: SearchService) {
    this.keyword$.subscribe(keyword => this.search(keyword))
  }

  search(keyword): void {
    this.searchService.search(keyword).subscribe(data => this.data = data);
  }
}
