import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- IMPORTANTE!

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule // <-- ADICIONE AQUI (para usar [class] e *ngIf)
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class Header {
  
  // A LÓGICA ESTÁ DE VOLTA!
  isMenuOpen = false; // Estado inicial: menu fechado

  // Função para abrir/fechar o menu pelo botão
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Função para garantir que o menu feche ao clicar em um link
  closeMenu() {
    this.isMenuOpen = false;
  }
}