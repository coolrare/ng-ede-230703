import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit, OnChanges, OnDestroy {
  @Input() i = 0;

  @Input() item: Article = {} as Article;

  @Output() delete = new EventEmitter<number>();

  deleteArticle() {
    this.delete.emit(this.item.id);
  }

  ngOnInit(): void {
    console.log('object initialized');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ArticleComponent ngOnChanges: ', changes);
    // changes['item'].currentValue
    // changes['item'].previousValue
    // changes['item'].firstChange
  }

  ngOnDestroy(): void {
    console.log('object destroyed');
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
