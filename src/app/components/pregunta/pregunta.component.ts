import { Component, OnInit } from '@angular/core';
import { Pregunta } from 'src/app/models/pregunta';
import { Respuesta } from 'src/app/models/respuesta';
import { PreguntaService } from 'src/app/services/pregunta.service';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css'],
})
export class PreguntaComponent implements OnInit {
  listPregunta: Pregunta[] = [];
  constructor(public _preguntaService: PreguntaService) {}

  ngOnInit(): void {
    this.listPregunta = this._preguntaService.getPreguntas();
  }

  obtenerPregunta() {
    return this.listPregunta[this._preguntaService.indexPregunta]
      .descripcionPregunta;
  }

  respuestaSeleccionanda(respuesta: Respuesta, indexRta:number) {
    if (this._preguntaService.pregConfirmada === true) {
      return;
    }
    this._preguntaService.opcionSelecionada = respuesta;
    this._preguntaService.deshabilitarBtn = false;
    this._preguntaService.indexRespuesta = indexRta;
  }

  addClassOption(respuesta: Respuesta) {
    //Pregunta seleccionada y no esta confirmada
    if (
      respuesta === this._preguntaService.opcionSelecionada &&
      !this._preguntaService.pregConfirmada
    ) {
      return 'active text-light';
    }

    //Respuesta CORRECTA y esta confirmada
    if (
      respuesta === this._preguntaService.opcionSelecionada &&
      this._preguntaService.pregConfirmada &&
      this._preguntaService.opcionSelecionada.esCorrecta === 1
    ) {
      return 'list-group-item-success';
    }

    //Respuesta INCORRECTA y esta confirmada
    if (
      respuesta === this._preguntaService.opcionSelecionada &&
      this._preguntaService.pregConfirmada &&
      this._preguntaService.opcionSelecionada.esCorrecta === 0
    ) {
      return 'list-group-item-danger';
    }
  }

  iconCorrecta(respuesta: Respuesta) {
    if (
      respuesta === this._preguntaService.opcionSelecionada &&
      this._preguntaService.pregConfirmada &&
      this._preguntaService.opcionSelecionada.esCorrecta === 1
    ) {
      return true;
    } else {
      return false;
    }
  }

  iconInCorrecta(respuesta: Respuesta) {
    if (
      respuesta === this._preguntaService.opcionSelecionada &&
      this._preguntaService.pregConfirmada &&
      this._preguntaService.opcionSelecionada.esCorrecta === 0
    ) {
      return true;
    } else {
      return false;
    }
  }
}
