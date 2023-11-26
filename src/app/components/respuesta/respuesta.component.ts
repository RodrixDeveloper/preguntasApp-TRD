import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pregunta } from 'src/app/models/pregunta';
import { PreguntaService } from 'src/app/services/pregunta.service';

@Component({
  selector: 'app-respuesta',
  templateUrl: './respuesta.component.html',
  styleUrls: ['./respuesta.component.css'],
})
export class RespuestaComponent implements OnInit {
  listPreguntas: Pregunta[] = [];
  respuestasUsuario!: any[];
  constructor(
    private _preguntaService: PreguntaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listPreguntas = this._preguntaService.preguntas;
    this.respuestasUsuario = this._preguntaService.respuestasUsuarios;
  }

  volver() {
    this._preguntaService.respuestasUsuarios= [];
    this._preguntaService.deshabilitarBtn= true;
    this.router.navigate(['/']);
  }
}
