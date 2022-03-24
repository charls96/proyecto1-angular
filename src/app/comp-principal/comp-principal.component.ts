import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-principal',
  templateUrl: './comp-principal.component.html',
  styleUrls: ['./comp-principal.component.css']
})
export class CompPrincipalComponent implements OnInit {
  curso1 = { 'nombre':'Beca Angular', 'total_dias':9, 'descripcion':'Curso sobre Angular y Typescript' };
  curso2 = { 'nombre':'Beca JavaScript', 'total_dias':10, 'descripcion':'Formacion sobre Java' }
  contador:number = 0;

  IntercambiarCursos(){
    let cursoMemoria1 = this.curso1;
    let cursoMemoria2 = this.curso2;

    this.curso1 = cursoMemoria2;
    this.curso2 = cursoMemoria1;

    this.contador++;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
