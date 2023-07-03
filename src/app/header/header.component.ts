import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  sitename = 'Hello World';
  sitelink = 'http://blog.miniasp.com/';
  sitelogo = '/assets/images/logo.png';
  subtitle = '記載著 <u>Will</u> 在網路世界的學習心得與技術分享';

  constructor() {
    setTimeout(() => {
      this.sitename = 'The Will Will Web';
    }, 3000);
  }
}
