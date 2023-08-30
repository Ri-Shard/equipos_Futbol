import { Component } from '@angular/core';
import {Equipo} from '../../Models/equipo';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EquipoService } from 'src/app/Service/equipoService';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-registro-equipos',
  templateUrl: './registro-equipos.component.html',
  styleUrls: ['./registro-equipos.component.css'],

})

export class RegistroEquiposComponent {

  equipo: FormGroup;
constructor(private formBuilder: FormBuilder,private equipoService: EquipoService){
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

async registrarEquipo() {
  console.log('Equipo registrado:', this.equipo);
      if (this.equipo.valid ) {
        const nuevoEquipo = new Equipo(
          this.equipo.value.nombre,
          this.equipo.value.estadio,
          this.equipo.value.sitioweb,
          this.equipo.value.nacionalidad,
          this.equipo.value.aniofundacion,
          this.equipo.value.entrenador,
          this.equipo.value.valor,
          this.equipo.value.capacidad,
        );
       const response : string  = await this.equipoService.addEquipo(nuevoEquipo);
       console.log(response);
       if (response == 'Equipo registrada con exito') {
        Swal.fire({
          text: response,
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
    
        });
       }else{
        Swal.fire({
          title: 'Error!',
          text: response,
          icon: 'error',
          confirmButtonText: 'Ok',
  
        });
       }
  
       this.equipo.reset();

                
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Formulario no válido. Por favor, verifica los campos.',
          icon: 'error',
          confirmButtonText: 'Ok',
          confirmButtonColor: 'Green',
  
        });
      } 

    }
  }

