// src/app/app.component.ts

import { Component, OnInit } from '@angular/core'; 
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header.component';
import { Footer } from './components/footer/footer.component';
// REMOVEMOS O SideMenuComponent
import { CommonModule, ViewportScroller } from '@angular/common'; 
import { Router, NavigationEnd } from '@angular/router'; 
import { filter } from 'rxjs'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    Header, // O Header está de volta
    Footer
    // O SideMenuComponent foi removido
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit { 
  title = 'portfolio-artista';
  
  // REMOVEMOS 'isMenuOpen', 'toggleMenu' e 'closeMenu' daqui

  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {}

  // ESTA LÓGICA É IMPORTANTE:
  // Ela conserta a rolagem ao carregar a página com #
  ngOnInit() {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe(event => {
      const fragment = this.router.parseUrl(event.url).fragment;
      if (fragment) {
        setTimeout(() => {
          this.viewportScroller.scrollToAnchor(fragment);
        }, 100);
      }
    });
  }
}