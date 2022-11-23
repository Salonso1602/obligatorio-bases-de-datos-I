import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PermisosViewComponent } from './components/permisos-view/permisos-view.component';
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
  component: LoginComponent
},
{
  path: 'register',
  component: RegisterComponent
},
{
  path: 'home',
  component: HomeComponent
},
{
  path: 'adminPermisos',
  component: PermisosViewComponent
},
{
  path: 'solicitarPermisos',
  component: RequestRoleComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
