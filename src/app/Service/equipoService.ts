import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { Equipo } from "../Models/equipo";



@Injectable({
  providedIn: 'root'
})

export class EquipoService {
  constructor() { }

  addEquipo(equipo: Equipo):string {
    try {

      return 'Prenda registrada con exito';
    } catch (error : string | any) {
      return error;
    }

  }

  

}