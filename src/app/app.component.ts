import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Article } from './article/article.component';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  keyword = 'ng-ede-230703';

  constructor(private datasvc: DataService) {
  }

  doSearch(value: string) {
    console.log(`Search keyword: ${value}`);
    this.keyword = value;

    // this.data = this.datasvc.searchArticle(value);
  }

  doDelete(id: number) {
    this.datasvc.deleteArticle(id);
  }

  data$: Observable<Article[]> = of([]);

  ngOnInit(): void {
    console.log('ngOnInit');

    this.data$ = this.datasvc.getArticles();
  }

}
