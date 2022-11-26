import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AppDummyComponent } from './components/app-dummy/app-dummy/app-dummy.component';
import { LoginComponent } from './components/login/login.component';
import { PermisosViewComponent } from './components/permisos-view/permisos-view.component';
import { RecuperarContrasenaComponent } from './components/recuperar-contrasena/recuperar-contrasena.component';
import { RegisterComponent } from './components/register/register.component';
import { RequestRoleComponent } from './components/request-role/request-role.component';
import { LoginGuard } from './guards/login-guard.service';

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
  path: 'home',
  canActivate: [LoginGuard],
  component: HomeComponent
},
{
  path: 'adminPermisos',
  canActivate: [LoginGuard],
  component: PermisosViewComponent
},
{

  path:"dummy",
  canActivate: [LoginGuard],
  component: AppDummyComponent
},
{
  path: 'solicitarPermisos',
  canActivate: [LoginGuard],
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
