import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent {
  nome: string = '';
  mensagem: string = '';

  constructor() { }

  enviarWhatsApp() {
    const telefone = '5592996087896'; 
    const texto = `Olá! Meu nome é ${this.nome}. Visitei o site e gostaria de um orçamento para: ${this.mensagem}`;
    const textoCodificado = encodeURIComponent(texto);
    const url = `https://wa.me/${telefone}?text=${textoCodificado}`;
    
    window.open(url, '_blank');
  }
}