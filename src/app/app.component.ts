import { Component } from '@angular/core';
import { SearchService } from './app.service';
import { Post } from './post.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>
        Ng Insta Search
      </h1>
      <hr>
      <div class="input-group>">
        <input type="text" class="form-control" placeholder="Type here" (input)="onSearch($event)">
      </div>
      <ul class="list-group" style="margin-top: 5px">
        <li class="list-group-item" *ngFor="let item of data">{{item.title}}</li>
      </ul>
    </div>
    
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
  data: Array<Post> = [];

  constructor(private searchService: SearchService) {
    this.searchService.search('quia').subscribe(data => {
      this.data = data
    })
  }

  onSearch(event): void {

  }
}
