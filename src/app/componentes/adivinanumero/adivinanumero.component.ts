import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs/internal/observable/timer';

@Component({
  selector: 'app-adivinanumero',
  templateUrl: './adivinanumero.component.html',
  styleUrls: ['./adivinanumero.component.css']
})
export class AdivinanumeroComponent implements OnInit {
  public numSecreto: number;
  public respuesta: string;
  public contador: number;
  public msgResultado: string;
  public esperando: boolean;
  public valido: boolean;
  constructor() { }

  ngOnInit() {
    this.numSecreto = 0;
    this.respuesta = '0';
    this.contador = 0;
    this.msgResultado = '';
    this.esperando = false;
    this.valido = false;
  }

  public NuevoNumero() {
    this.numSecreto = Math.floor(Math.random() * (50 - 1) + 1);
    // console.log(this.numSecreto);
    this.msgResultado = '';
    this.esperando = true;
    this.valido = false;
  }

  public VerificarNumero() {
    const resp = Number.parseInt(this.respuesta, 10);
    const correctResp = Number.parseInt(this.numSecreto.toString(), 10);
    // console.log(resp, correctResp);

    if (resp === correctResp) {
      this.msgResultado = 'Adivinaste el número en ' + this.contador + ' intento/s.';
      this.valido = true;
      this.esperando = false;
      // console.log('Correcto');
    } else {
      this.contador++;
      this.valido = false;
      this.msgResultado = 'Numero Incorrecto,';

      if (resp < correctResp) {
        this.msgResultado += ' falta para llegar.';
      } else if (resp > correctResp) {
        this.msgResultado += ' te has pasado del número.';
      }

      this.msgResultado += ' Llevas ' + this.contador + ' intento/s.';

      timer(2000).subscribe(() => {
        this.msgResultado = '';
      });
      // console.log('Incorrecto');
    }

    // console.log(this.msgResultado);

  }
}
