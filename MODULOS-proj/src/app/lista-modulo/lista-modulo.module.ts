import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { InputComponent } from './input/input.component';



@NgModule({
  declarations: [
    ListaComponent,
    InputComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[ 
    ListaComponent
  ]
})
export class ListaModuloModule { }
