import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenu {
  // Recebe o estado (aberto/fechado) do app.component
  @Input() isOpen = false;
  
  // Emite um evento para o app.component pedindo para fechar
  @Output() menuCloseRequest = new EventEmitter<void>();

  // Função local que dispara o evento
  closeMenu() {
    this.menuCloseRequest.emit();
  }
}