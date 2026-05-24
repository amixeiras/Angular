import {
  Component, OnInit,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent implements OnInit, DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy {

  quantidade: number = 0;

  constructor() { }

  ngOnInit(): void {
    console.log("OnInit");
  }

  ngOnDestroy(): void {
    console.log("OnDestroy");
  }

  //Checked => content => view

  ngDoCheck(): void {
    console.log("DoCheck");
  }

  //Quando o conteudo é iniciado
  ngAfterContentInit(): void {
    console.log("AfterContentInit");
  }

  //Depois da inicialização da view
  ngAfterViewInit(): void {
    console.log("AfterViewInit");
  }
  //Após alguma alteração verifica o conteudo
  ngAfterContentChecked(): void {
    console.log("AfterContentChecked");
  }

  //Após alguma alteração verifica a view
  ngAfterViewChecked(): void {
    console.log("AfterViewChecked");
  }

  adicionar() {
    this.quantidade += 1;
  }

  decrementar() {
    this.quantidade -= 1;
  }

}
