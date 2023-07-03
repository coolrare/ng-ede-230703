import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  @Input() i = 0;

  @Input() item: any = {};

  @Output() delete = new EventEmitter<number>();

  deleteArticle() {
    this.delete.emit(this.item.id);
  }

}
