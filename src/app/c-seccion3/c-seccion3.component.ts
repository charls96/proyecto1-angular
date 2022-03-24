import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductosService } from '../servicio/productos.service';
import { Product } from '../models/product.model'

@Component({
  selector: 'app-c-seccion3',
  templateUrl: './c-seccion3.component.html',
  styleUrls: ['./c-seccion3.component.css']
})
export class CSeccion3Component implements OnInit {
  nombrePersona: string|undefined;
  productos: Product[];

  constructor(private route: ActivatedRoute, private router: Router, private productosService: ProductosService) {
    this.productos = productosService.productos;
  };

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      if (params["nombre"] != null){
        this.nombrePersona = params["nombre"];
      }
    })
  }

}
