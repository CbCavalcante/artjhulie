import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header.component';
import { Footer } from './components/footer/footer.component';
import { SideMenu } from './components/side-menu/side-menu.component'; // 1. IMPORTE O NOVO MENU
import { CommonModule } from '@angular/common'; // 2. IMPORTE O COMMONMODULE

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule, // 3. ADICIONE AQUI
    Header,
    Footer,
    SideMenu // 4. ADICIONE O NOVO MENU AQUI
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // 5. CERTIFIQUE-SE QUE O SCSS ESTÁ AQUI
})
export class AppComponent {
  title = 'portfolio-artista';

  // 6. ADICIONE A LÓGICA DE CONTROLE AQUI
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}