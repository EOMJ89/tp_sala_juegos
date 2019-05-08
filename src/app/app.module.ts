import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './componentes/home/home.component';
import { AritmeticaComponent } from './componentes/aritmetica/aritmetica.component';
import { PipatiComponent } from './componentes/pipati/pipati.component';
import { AdivinanumeroComponent } from './componentes/adivinanumero/adivinanumero.component';
import { ResultadoComponent } from './componentes/resultado/resultado.component';
import { MemoriaComponent } from './componentes/memoria/memoria.component';
import { MenuComponent } from './componentes/menu/menu.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AritmeticaComponent,
    PipatiComponent,
    AdivinanumeroComponent,
    ResultadoComponent,
    MemoriaComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
