import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-c-seccion2',
  templateUrl: './c-seccion2.component.html',
  styleUrls: ['./c-seccion2.component.css']
})
export class CSeccion2Component implements OnInit {

  ciudad: string|undefined;
  poblacion: string|undefined;

  constructor(private route: ActivatedRoute, private router: Router) { };

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      if (params['ciudad'] != null){
        this.ciudad = params['ciudad']
      }
      if (params['poblacion'] != null){
        this.poblacion = params['poblacion']
      }
    })

  }

}
