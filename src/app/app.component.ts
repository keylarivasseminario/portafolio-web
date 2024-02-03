import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'web-keyla';
  constructor() {
    console.log("dasdasd");
    
    window.scroll(0, 0);
  }
}
