import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trabalhos',
  standalone: true,
  imports: [CommonModule], // Removemos o CarouselModule daqui
  templateUrl: './trabalhos.component.html',
  styleUrls: ['./trabalhos.component.scss']
})
export class TrabalhosComponent implements OnInit, OnDestroy {

  artes = [
    { 
      imagem: 'assets/Camisas.jpeg',
      titulo: 'Camisas',
      subtitulo: 'Camisa <span class="destaque-colecao">"ELO DE AMOR"</span>',
      descricao: 'Elo de amor é um carinho estampado! Com traços finos e delicados, ela representa o vínculo entre mãe e filho, reforçado pela mensagem: "O amor é o nosso elo".' 
    },
    { 
      imagem: 'assets/Parede_3.jpg',
      titulo: 'Pintura de Parede', 
      subtitulo: 'Parede feita para @Amevelim',
      descricao: 'Arte desenvolvida para a interior da Amevelim. Com folhagens fluidas pintadas à mão, este projeto cria um movimento visual único na parede. O design minimalista e marcante transforma um ambiente comum em um cenário acolhedor, cheio de personalidade e estilo.' 
    },
    { 
      imagem: 'assets/Quadro.jpg',
      titulo: 'Quadros',
      subtitulo: 'Quadro "AFETO"',
      descricao: 'Pintura artesanal sobre placa circular de madeira (MDF). Este projeto combina lettering manual com uma paleta de cores terrosas sobre o fundo natural da madeira. Os detalhes ilustrativos criam uma peça de decoração acolhedora, perfeita para trazer uma sensação de afeto e aconchego a qualquer ambiente.' 
    },
    { 
      imagem: 'assets/Canecas.jpg',
      titulo: 'Canecas',
      subtitulo: 'Canecas Personalizadas',
      descricao: 'Um carinho que cabe na palma da mão. Com uma arte delicada em "line art", esta caneca captura a essência do cuidado e do amor mais puro. Um presente cheio de significado para tornar as manhãs ainda mais especiais e quentinhas.' 
    },
    { 
      imagem: 'assets/Arte_Digital.jpg',
      titulo: 'Arte Digital',
      subtitulo: 'Arte Digital manual',
      descricao: 'Transforme fotografias especiais em ilustrações únicas. Feita em estilo "line art" com formas orgânicas suaves e lettering personalizado, essa arte digital é o presente perfeito para celebrar aniversários e eternizar conexões com muito amor.' 
    },
    { 
      imagem: 'assets/Ecobags.jpg',
      titulo: 'Ecobags',
      subtitulo: 'Ecobags Personalizada',
      descricao: 'Arte 100% manual em ecobag de algodão cru, criada como um presente especial para o Dia dos Professores. O projeto é totalmente personalizado, combinando um lettering cursivo leve com uma ilustração divertida e temática. Uma peça única que une afeto e criatividade.' 
    }
  ];

  slideAtual = 0;
  intervaloSlide: any;

  ngOnInit(): void {
    // Inicia a troca automática a cada 4 segundos ao carregar a seção
    this.iniciarCarrosselAutomatico();
  }

  ngOnDestroy(): void {
    // Limpa a memória caso o componente seja fechado
    this.pararCarrosselAutomatico();
  }

  iniciarCarrosselAutomatico(): void {
    this.intervaloSlide = setInterval(() => {
      this.proximoSlide();
    }, 4000); 
  }

  pararCarrosselAutomatico(): void {
    if (this.intervaloSlide) {
      clearInterval(this.intervaloSlide);
    }
  }

  proximoSlide(): void {
    this.slideAtual = (this.slideAtual === this.artes.length - 1) ? 0 : this.slideAtual + 1;
  }

  slideAnterior(): void {
    this.slideAtual = (this.slideAtual === 0) ? this.artes.length - 1 : this.slideAtual - 1;
  }

  irParaSlide(index: number): void {
    this.slideAtual = index;
    // Se o usuário clicar, reiniciamos a contagem para não passar a foto rápido demais
    this.pararCarrosselAutomatico();
    this.iniciarCarrosselAutomatico();
  }
}