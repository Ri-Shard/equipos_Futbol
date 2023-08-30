import { Component } from '@angular/core';
import {Equipo} from '../../Models/equipo';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-registro-equipos',
  templateUrl: './registro-equipos.component.html',
  styleUrls: ['./registro-equipos.component.css'],

})

export class RegistroEquiposComponent {

  equipo: FormGroup;
constructor(private formBuilder: FormBuilder){
  this.equipo = this.formBuilder.group({
    nombre:['', Validators.required],
    estadio: ['', Validators.required],
    sitioweb: ['', Validators.required],
    nacionalidad: ['', Validators.required],
    aniofundacion: ['', Validators.required],
    entrenador: ['', Validators.required],
    valor: ['', Validators.required],
    capacidad: ['', Validators.required],

  });
}

  registrarEquipo() {
    console.log('Equipo registrado:', this.equipo);
  }
}
