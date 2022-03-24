import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../servicio/usuarios.service'

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuarios: any; /* = [{id: '', name: '', surname: '', email: '', address: '', phone: '', website: '', company:{} }]; */
  usuarioAgregar: any = {name: '', surname: '', email: '' }

  constructor(private usuariosService:UsuariosService) {
    this.listarUsuarios();
   }

  ngOnInit(): void {
  }

  listarUsuarios() {
    this.usuariosService.listarUsuarios().subscribe({
      next: r => {
        this.usuarios = r
      },
      error: e => console.log(JSON.stringify(e))
    })
  }

  eliminarUsuario (id_usuario: any){
    console.log("Elminar usuario: " + id_usuario);
    this.usuariosService.eliminarUsuario(id_usuario).subscribe({
      next: () => this.listarUsuarios(),
      error: e => console.log(JSON.stringify(e))
    })
  }

  nuevoUsuario () {
    this.usuariosService.nuevoUsuario(this.usuarioAgregar).subscribe({
      next: () => this.listarUsuarios(),
      error: e => console.log(JSON.stringify(e))
    })
  }

}
