import { Component } from '@angular/core';
import { Sobre } from "../../components/sobre/sobre.component";
import { NamoradosComponent } from "../../components/namorados/namorados.component";
import { TrabalhosComponent } from "../../components/trabalhos/trabalhos.component";
import { ContatoComponent } from "../../components/contato/contato.component";
import { SobreLoja } from "../../components/sobre-loja/sobre-loja.component";

@Component({
  selector: 'app-home',
  imports: [Sobre, NamoradosComponent, TrabalhosComponent, ContatoComponent, SobreLoja],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class Home {

}
