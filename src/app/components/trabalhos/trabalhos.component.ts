// src/app/components/trabalhos/trabalhos.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel'; // <-- 1. Importe o módulo aqui

@Component({
  selector: 'app-trabalhos',
  standalone: true,
  imports: [
    CommonModule, // Necessário para usar diretivas como *ngFor
    CarouselModule  // <-- 2. Adicione o módulo aqui no array de imports
  ],
  templateUrl: './trabalhos.component.html',
  styleUrls: ['./trabalhos.component.scss']
})
export class TrabalhosComponent {
  // O seu array de artes continua aqui...
  artes = [
    { imagem: 'assets/Camisas.jpeg', titulo: 'Camisas', descricao: 'Camisas "O amor é o nosso elo"' },
    { imagem: 'assets/Parede_1.jpeg', titulo: 'Paredes', descricao: 'Pintura de parede' },
    { imagem: 'assets/Ecobags.jpeg', titulo: 'Ecobags', descricao: 'Ecobags especiais para professores' },
    { imagem: 'assets/Quadros.jpeg', titulo: 'Quadros', descricao: 'Pintura de quadros de natal' },
  ];
}