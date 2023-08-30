import { Component } from '@angular/core';
import {Equipo} from '../../Models/equipo';

@Component({
  selector: 'app-registro-equipos',
  templateUrl: './registro-equipos.component.html',
  styleUrls: ['./registro-equipos.component.css']
})
export class RegistroEquiposComponent {
  equipo: Equipo = new Equipo('', '', null, '', '', '', 0, 0); // Crear una instancia vacía de Equipo

  registrarEquipo() {
    console.log('Equipo registrado:', this.equipo);
  }
}
