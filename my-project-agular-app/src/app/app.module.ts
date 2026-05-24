import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello/hello.component'
import { MyButton } from './components/button/button.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { InputComponent } from './components/input/input.component';
import { FormsModule } from '@angular/forms'; // 1. Import FormsModule

@NgModule({
  declarations: [
    AppComponent, HelloComponent, MyButton, InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
