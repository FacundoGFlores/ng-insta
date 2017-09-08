import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { Post } from './post.model';

@Injectable()
export class SearchService {

  constructor(private http: Http) { }

  search(keyword: string): Observable<Array<Post>> {
    return this.http.get('http://jsonplaceholder.typicode.com/posts/')
      .map(response => response.json())
      .map((data: Array<Post>) => data.filter(d => d.title.includes(keyword)))
  }
}
