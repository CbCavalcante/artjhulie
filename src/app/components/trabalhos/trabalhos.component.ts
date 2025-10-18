import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent, CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-trabalhos',
  standalone: true,
  imports: [
    CommonModule,
    CarouselModule
  ],
  templateUrl: './trabalhos.component.html',
  styleUrls: ['./trabalhos.component.scss']
})
export class TrabalhosComponent {

  @ViewChild(CarouselComponent) carousel?: CarouselComponent;

  activeSlideIndex: number = 0;

  artes = [
    { 
      imagem: 'assets/Camisas.jpeg',
      titulo: 'Camisas', 
      descricao: 'Camisa "ELO DE AMOR"\n\nElo de amor é um carinho estampado! Com traços finos e delicados, ela representa o vínculo entre mãe e filho, reforçado pela mensagem: "O amor é o nosso elo".' 
    },
    { 
      imagem: 'assets/Parede_3.jpg',
      titulo: 'Pintura de Parede', 
      descricao: 'Parede feita para @grillzmao\n\nArte desenvolvida para a entrada de um estabelecimento, com foco em lettering manual em grande escala. O projeto utiliza o preto como base para destacar as cores vibrantes e as mensagens de boas-vindas, criando uma identidade visual única e convidativa para o espaço.' 
    },
      { 
      imagem: 'assets/Quadro.jpg',
      titulo: 'Quadros', 
      descricao: 'Quadro "AFETO"\n\nPintura artesanal sobre placa circular de madeira (MDF). Este projeto combina lettering manual com uma paleta de cores terrosas sobre o fundo natural da madeira. Os detalhes ilustrativos criam uma peça de decoração acolhedora, perfeita para trazer uma sensação de afeto e aconchego a qualquer ambiente.' 
    },
    { 
      imagem: 'assets/Ecobags.jpg',
      titulo: 'Ecobags', 
      descricao: 'Ecobag personalizada\n\nArte 100% manual em ecobag de algodão cru, criada como um presente especial para o Dia dos Professores. O projeto é totalmente personalizado, combinando um lettering cursivo leve com uma ilustração divertida e temática. Uma peça única que une afeto e criatividade.' 
    }
  ];

  onActiveSlideChange(index: number): void {
    this.activeSlideIndex = index;
  }

  previousSlide(): void {
    this.carousel?.previousSlide();
  }

  nextSlide(): void {
    this.carousel?.nextSlide();
  }
}