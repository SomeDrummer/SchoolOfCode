import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { AlumnoDetalleComponent } from './alumno-detalle/alumno-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlumnosComponent,
    AlumnoDetalleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
