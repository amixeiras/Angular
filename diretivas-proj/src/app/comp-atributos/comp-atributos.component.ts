import { Component, OnInit } from '@angular/core';
import { NgClass, NgStyle } from "../../../node_modules/@angular/common/index";

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrls: ['./comp-atributos.component.css']
})
export class CompAtributosComponent implements OnInit {

  estilo: string = 'enabled';
  corFundo: string = 'red';
  item: string = '';
  lista: string[] = [];
  isEnabledBlock: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  mudar(){
    if (this.estilo === 'enabled') {
      this.estilo = 'disable';
    }else{
      this.estilo = 'enabled';
    }
  }

  adicionarLista(){
    this.lista.push(this.item);
  }
}
