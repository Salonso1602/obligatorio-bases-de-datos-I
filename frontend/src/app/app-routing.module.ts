import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppDummyComponent } from './components/app-dummy/app-dummy/app-dummy.component';
import { LoginComponent } from './components/login/login.component';
import { PermisosViewComponent } from './components/permisos-view/permisos-view.component';
import { RecuperarContrasenaComponent } from './components/recuperar-contrasena/recuperar-contrasena.component';
import { RegisterComponent } from './components/register/register.component';
import { RequestRoleComponent } from './components/request-role/request-role.component';

const routes: Routes = [
  {
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
},
{
  path: 'login',
  component: LoginComponent,
},
{
  path: 'register',
  component: RegisterComponent
},
{
  path: 'adminPermisos',
  component: PermisosViewComponent
},
{

  path:"dummy",
  component: AppDummyComponent
},
{
  path: 'solicitarPermisos',
  component: RequestRoleComponent
},
{
  path: 'recuperarContrasena',
  component: RecuperarContrasenaComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
