import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from './article/article.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  getArticles() {
    return this.http.get<Article[]>('/assets/articles.json');
  }

  searchArticle(keyword: string) {
    console.log(`Search article: ${keyword}`);
    // return this.data.filter((item) => item.title.includes(keyword));
  }

  deleteArticle(id: number) {
    console.log(`Delete article id: ${id}`);
  }

}
