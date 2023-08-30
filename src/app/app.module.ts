import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListadoEquiposComponent } from './UI/listado-equipos/listado-equipos.component';
import { RegistroEquiposComponent } from './UI/registro-equipos/registro-equipos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoEquiposComponent,
    RegistroEquiposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
