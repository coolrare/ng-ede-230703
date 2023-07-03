import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  sitename = 'The Will Will Web';
  subtitle = '記載著 Will 在網路世界的學習心得與技術分享';
}
