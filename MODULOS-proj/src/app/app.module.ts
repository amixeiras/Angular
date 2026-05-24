import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ListaModuloModule } from './lista-modulo/lista-modulo.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListaModuloModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
