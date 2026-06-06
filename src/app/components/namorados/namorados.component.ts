// src/app/components/namorados/namorados.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-namorados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './namorados.component.html',
  styleUrls: ['./namorados.component.scss']
})
export class NamoradosComponent {
   produtos = [
    {
      imagem: 'assets/Quadro_namorados.jpg',
      alt: 'Quadro "NÓS" - Coleção "BEM" / Dia dos Namorados',
      nome: 'Quadro "NÓS"',
      descricao: 'Arte exclusiva da Coleção "Bem" para celebrar a união e decorar com significado.'
    },
    {
      imagem: 'assets/Ceramica_namorados.jpg',
      alt: 'Quadro "LAR" - Coleção "BEM" / Dia dos Namorados',
      nome: 'Cerâmica "LAR"',
      descricao: 'Peça artesanal única, perfeita para trazer afeto ao cantinho especial de vocês.'
    },
    {
      imagem: 'assets/Moldura_namorados.jpg',
      alt: 'Quadro "AMOR" - Coleção "BEM" / Dia dos Namorados',
      nome: 'Quadro "AMOR"',
      descricao: 'Arte delicada e emoldurada para eternizar na parede os melhores momentos a dois.'
    },
    {
      imagem: 'assets/Xicara_namorados.jpg',
      alt: 'Kit "AMANHECER" - Coleção "BEM" / Dia dos Namorados',
      nome: 'Kit "AMANHECER"',
      descricao: 'Para começar o dia com carinho. Inclui arte exclusiva e xícara personalizada.'
    }
  ];

  slideAtual = 0;

  proximoSlide(): void {
    this.slideAtual = (this.slideAtual === this.produtos.length - 1) ? 0 : this.slideAtual + 1;
  }

  slideAnterior(): void {
    this.slideAtual = (this.slideAtual === 0) ? this.produtos.length - 1 : this.slideAtual - 1;
  }

  irParaSlide(index: number): void {
    this.slideAtual = index;
  }
}