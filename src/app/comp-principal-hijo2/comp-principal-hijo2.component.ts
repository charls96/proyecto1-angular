import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comp-principal-hijo2',
  templateUrl: './comp-principal-hijo2.component.html',
  styleUrls: ['./comp-principal-hijo2.component.css']
})
export class CompPrincipalHijo2Component implements OnInit {

  @Input("propiedadCurso1") datosPropiedadCurso1: any;
  @Input("propiedadContador") datosContador: undefined|number;

  constructor() { }

  ngOnInit(): void {
  }

}
