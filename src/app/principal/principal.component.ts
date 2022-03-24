import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  titulo: any = "Angular con everFuture";
  personaData: any = {nombre: "Carlos", apellidos: "Daniel", edad: 26};

  eventoBotonAngular(){
    console.log('Ejecutamos el evento para ' + this.personaData.nombre);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
