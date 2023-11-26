import { Injectable } from '@angular/core';
import { Pregunta } from '../models/pregunta';
import { Respuesta } from '../models/respuesta';

@Injectable({
  providedIn: 'root',
})
export class PreguntaService {
  indexPregunta = 0;
  opcionSelecionada!:Respuesta;
  deshabilitarBtn= true;
  pregConfirmada = false;
  indexRespuesta= null as any;
  // respuestasUsuarios:any;
  respuestasUsuarios:Array<number> =[];
  public preguntas: Pregunta[] = [
    {
      descripcionPregunta: 'La capital de Bolivia',
      respuesta: [
        {
          nombre: 'Sucre',
          esCorrecta: 1,
        },
        {
          nombre: 'La paz',
          esCorrecta: 0,
        },
        {
          nombre: 'Beni',
          esCorrecta: 0,
        },
      ],
    },
    {
      descripcionPregunta: 'La capital de LAPAZ',
      respuesta: [
        {
          nombre: 'Sucre',
          esCorrecta: 0,
        },
        {
          nombre: 'La paz',
          esCorrecta: 1,
        },
        {
          nombre: 'Beni',
          esCorrecta: 0,
        },
      ],
    },
  ];

  constructor() {}

  getPreguntas() {
    return this.preguntas.slice();
  }
}
