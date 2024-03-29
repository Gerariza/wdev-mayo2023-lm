// Aqui se declaran modulos, librerias en tre otros detalles.
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// se necesita el client http
import { HttpClientModule } from '@angular/common/http'; //Aqui nada mas LLAMAMOS el modulo

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule //Aqui lo declaramos para que funcione
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
