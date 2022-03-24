import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comp-principal-hijo3',
  templateUrl: './comp-principal-hijo3.component.html',
  styleUrls: ['./comp-principal-hijo3.component.css'],
})
export class CompPrincipalHijo3Component implements OnInit {
  @Input('propiedadCurso2') datosPropiedadCurso2: any;
  @Input('propiedadContador') datosContador: undefined | number;

  constructor() {}

  ngOnInit(): void {}
}
