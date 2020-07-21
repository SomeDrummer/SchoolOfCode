import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AlumnosComponent } from './alumnos/alumnos.component';

const APP_ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'alumnos', component: AlumnosComponent },
  { path: '**', pathMatch:'full', redirectTo: 'login' }
];

export const appRouting = RouterModule.forRoot(APP_ROUTES);