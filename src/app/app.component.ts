import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  keyword = 'ng-ede-230703';

  doSearch(value: string) {
    console.log(`Search keyword: ${value}`);
    this.keyword = value;
  }
}
