import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class Header {
  
  // Recebe o estado do menu (para saber se mostra 'X' ou 'Barras')
  @Input() isMenuOpen = false;

  // Emite um evento para o app.component pedindo para abrir/fechar
  @Output() menuToggleRequest = new EventEmitter<void>();

  // Não precisamos de lógica de 'closeMenu' aqui
}