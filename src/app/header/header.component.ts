import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'keyla-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  private isScrolling: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:scroll', ['$event'])
  doSomething() {
    this.isScrolling = window.pageYOffset != 0;
  }

  public getNavClass() {
    return { scrolling: this.isScrolling };
  }

  goToSection(anchor: string) {
    let ordinatePosition: number;

    const element = document.getElementById(anchor);
    // Se le resta 60 por el alto del header
    ordinatePosition =
      element?.getBoundingClientRect().top - 60 + window.scrollY ?? null;

    if (ordinatePosition) {
      window.scroll({
        top: ordinatePosition,
        behavior: 'smooth',
      });
    }
  }
}
