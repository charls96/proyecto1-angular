import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ProductosService } from './servicio/productos.service'
import { UsuariosService } from './servicio/usuarios.service'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HijoPrComponent } from './hijo-pr/hijo-pr.component';
import { CompPrincipalComponent } from './comp-principal/comp-principal.component';
import { CompPrincipalHijo1Component } from './comp-principal-hijo1/comp-principal-hijo1.component';
import { CompPrincipalHijo2Component } from './comp-principal-hijo2/comp-principal-hijo2.component';
import { CompPrincipalHijo3Component } from './comp-principal-hijo3/comp-principal-hijo3.component';
import { CompPrincipalHijo4Component } from './comp-principal-hijo4/comp-principal-hijo4.component';
import { CSeccion2Component } from './c-seccion2/c-seccion2.component';
import { CSeccion3Component } from './c-seccion3/c-seccion3.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  {path:'', component: CSeccion2Component},
  {path:'seccion2', component: CSeccion2Component},
  {path:'seccion3', component: CSeccion3Component},
  {path:'seccion2/:nombre', component: CSeccion3Component},
  {path:'seccion3/:ciudad/:poblacion', component: CSeccion2Component},
  {path:'usuario', component: UsuarioComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    HeaderComponent,
    FooterComponent,
    HijoPrComponent,
    CompPrincipalComponent,
    CompPrincipalHijo1Component,
    CompPrincipalHijo2Component,
    CompPrincipalHijo3Component,
    CompPrincipalHijo4Component,
    CSeccion2Component,
    CSeccion3Component,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [ProductosService, UsuariosService],
  bootstrap: [PrincipalComponent]
})
export class AppModule { }
