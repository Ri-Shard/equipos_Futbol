export class Equipo {
    nombre: string;
    estadio: string;
    sitioWeb: string | null;
    nacionalidad: string;
    anioFundacion: string; 
    entrenador: string;
    capacidad: number;
    valor: number;
  
    constructor(
      nombre: string,
      estadio: string,
      sitioWeb: string | null,
      nacionalidad: string,
      anioFundacion: string,
      entrenador: string,
      capacidad: number,
      valor: number
    ) {
      this.nombre = nombre;
      this.estadio = estadio;
      this.sitioWeb = sitioWeb;
      this.nacionalidad = nacionalidad;
      this.anioFundacion = anioFundacion;
      this.entrenador = entrenador;
      this.capacidad = capacidad;
      this.valor = valor;
    }
  }
  
  