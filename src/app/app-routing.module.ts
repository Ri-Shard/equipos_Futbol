import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroEquiposComponent } from './UI/registro-equipos/registro-equipos.component';
import { ListadoEquiposComponent } from './UI/listado-equipos/listado-equipos.component';
import { LoginScreenComponent } from './UI/login-screen/login-screen.component';

const routes: Routes = [
  {path: '',redirectTo: '/Home', pathMatch: 'full'},
  {path: 'Home',component: ListadoEquiposComponent},
  {path: 'RegistroEquipo',component: RegistroEquiposComponent},
  {path: 'Login',component: LoginScreenComponent}

  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
