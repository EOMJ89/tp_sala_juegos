import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipati',
  templateUrl: './pipati.component.html',
  styleUrls: ['./pipati.component.css']
})
export class PipatiComponent implements OnInit {
  public msgJuego: string;
  public contador: number;
  public msgResultado: string;
  public valido: boolean;
  public eleccionMaquina: string;
  private eleccionUser: string;
  public imagenMaquina: string;

  constructor() { }

  ngOnInit() {
    this.contador = 0;
    this.ReiniciarJuego();
  }

  public ReiniciarJuego() {
    this.msgJuego = 'La maquina elegirá cuando usted lo haga...';
    this.eleccionMaquina = '';
    this.eleccionUser = '';
    this.msgResultado = '';
    this.imagenMaquina = '../../../assets/images/nada.png';
    this.valido = false;
  }

  public Elegir(numberUs: number) {
    this.eleccionUser = this.TomarEleccion(numberUs);
    this.eleccionMaquina = this.ElegirMaquina();
    this.msgJuego = 'La maquina eligió:';
    // console.log('Maquina:', this.eleccionMaquina);
    // console.log('User', this.eleccionUser);
    this.valido = false;
    this.DecidirGanador();
  }

  private ElegirMaquina() {
    const numEleccion: number = Math.floor(Math.random() * (4 - 1) + 1);
    const auxReturn = this.TomarEleccion(numEleccion);

    switch (auxReturn) {
      case 'piedra': {
        this.imagenMaquina = '../../../assets/images/piedra.png';
        break;
      }
      case 'papel': {
        this.imagenMaquina = '../../../assets/images/papel.png';
        break;
      }
      default: {
        this.imagenMaquina = '../../../assets/images/tijera.png';
        break;
      }
    }

    return auxReturn;
  }

  public TomarEleccion(eleccion) {
    let auxReturn = 'tijera';
    switch (eleccion) {
      case 1: {
        auxReturn = 'piedra';
        break;
      }
      case 2: {
        auxReturn = 'papel';
        break;
      }
      default: {
        auxReturn = 'tijera';
        break;
      }
    }
    return auxReturn;
  }

  public DecidirGanador() {
    let mensajeNum = 1;

    switch (this.eleccionUser) {
      case 'piedra': {
        switch (this.eleccionMaquina) {
          case 'piedra': {
            mensajeNum = 2;
            break;
          }
          case 'papel': {
            mensajeNum = 3;
            break;
          }
          default: {
            mensajeNum = 1;
            break;
          }
        }
        break;
      }
      case 'papel': {
        switch (this.eleccionMaquina) {
          case 'piedra': {
            mensajeNum = 1;
            break;
          }
          case 'papel': {
            mensajeNum = 2;
            break;
          }
          default: {
            mensajeNum = 3;
            break;
          }
        }
        break;
      }
      default: {
        switch (this.eleccionMaquina) {
          case 'piedra': {
            mensajeNum = 3;
            break;
          }
          case 'papel': {
            mensajeNum = 1;
            break;
          }
          default: {
            mensajeNum = 2;
            break;
          }
        }
        break;
      }
    }

    switch (mensajeNum) {
      case 1: {
        this.msgResultado = 'Usted gana.';
        this.contador = this.contador + 1;
        this.valido = true;
        break;
      }
      case 2: {
        this.msgResultado = 'Empate entre jugadores.';
        break;
      }
      default: {
        this.msgResultado = 'La máquina gana.';
        break;
      }
    }
  }
}
