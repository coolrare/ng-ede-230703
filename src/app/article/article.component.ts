import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent {
  @Input() i = 0;

  @Input() item: Article = {} as Article;

  @Output() delete = new EventEmitter<number>();

  deleteArticle() {
    this.delete.emit(this.item.id);
  }
}

export interface Article {
  id: number;
  href: string;
  title: string;
  date: string;
  author: string;
  category: string;
  'category-link': string;
  summary: string;
}
