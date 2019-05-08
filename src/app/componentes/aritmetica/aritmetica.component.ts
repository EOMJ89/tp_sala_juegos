import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs/internal/observable/timer';

@Component({
  selector: 'app-aritmetica',
  templateUrl: './aritmetica.component.html',
  styleUrls: ['./aritmetica.component.css']
})
export class AritmeticaComponent implements OnInit {
  public prOperando: number;
  public operacion: string;
  public sgOperando: number;
  public respuesta: string;
  public contador: number;
  public msgResultado: string;
  public esperando: boolean;
  private respuestaCorrecta: number;
  public valido: boolean;

  public tiempo: number;

  constructor() { }

  ngOnInit() {
    this.prOperando = 0;
    this.operacion = '';
    this.sgOperando = 0;
    this.respuesta = '0';
    this.contador = 0;
    this.msgResultado = '';
    this.esperando = false;
    this.valido = false;
    this.tiempo = 60;

  }

  public NuevaOperacion() {
    this.prOperando = this.GetOperando(1, 10);
    this.operacion = this.GetOperacion();
    this.sgOperando = this.GetOperando(1, 10);

    this.respuestaCorrecta = this.CrearRespuesta();
    this.esperando = true;
    this.msgResultado = '';
    this.tiempo = 60;

    const intervalID = setInterval(() => {
      this.tiempo = this.tiempo - 1;
      // console.log(this.tiempo);

      if (this.tiempo === 0) {
        clearInterval(intervalID);
        if (this.esperando === true) {
          this.VerificarOperacion();
        }
      }
    }, 1000);
  }

  private GetOperando(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }

  private GetOperacion(): string {
    const opValue = this.GetOperando(0, 4);
    let respuesta = '+';

    switch (opValue) {
      case 1: {
        respuesta = '-';
        break;
      }
      case 2: {
        respuesta = '*';
        break;
      } case 3: {
        respuesta = '/';
        break;
      }
      default: {
        respuesta = '+';
        break;
      }
    }
    return respuesta;
  }

  private CrearRespuesta() {
    let respuesta = 0;
    switch (this.operacion) {
      case '-': {
        respuesta = this.prOperando - this.sgOperando;
        break;
      }
      case '*': {
        respuesta = this.prOperando * this.sgOperando;

        break;
      } case '/': {
        respuesta = this.prOperando / this.sgOperando;
        break;
      }
      default: {
        respuesta = this.prOperando + this.sgOperando;
        break;
      }
    }

    return respuesta;
  }

  public VerificarOperacion() {
    const resp = Number.parseFloat(this.respuesta);
    const correctResp = Number.parseFloat(this.respuestaCorrecta.toString());
    // console.log(resp, correctResp);

    if (resp === correctResp) {
      this.contador++;
      this.msgResultado = 'Respuesta Correcta.';
      this.valido = true;
      // console.log('Correcto');
    } else {
      this.msgResultado = 'Respuesta Incorrecta.';
      this.valido = false;
      // console.log('Incorrecto');
    }

    this.msgResultado += ' Con ' + this.tiempo + ' segundo/s restantes.';
    this.esperando = false;
    timer(2000).subscribe(() => {
      this.msgResultado = '';
    });
  }
}
