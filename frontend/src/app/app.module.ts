import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PermisosViewComponent } from './components/permisos-view/permisos-view.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AppDummyComponent } from './components/app-dummy/app-dummy/app-dummy.component';
import { RequestRoleComponent } from './components/request-role/request-role.component';
import { SessionPersistanceInterceptor } from './services/session-persistance.interceptor';
import { RecuperarContrasenaComponent } from './components/recuperar-contrasena/recuperar-contrasena.component';
import { LoginGuard } from './guards/login-guard.service';
import { CambiarContrasenaComponent } from './components/cambiar-contrasena/cambiar-contrasena.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PermisosViewComponent,
    RegisterComponent,
    HomeComponent,
    AppDummyComponent,
    RequestRoleComponent,
    RecuperarContrasenaComponent,
    CambiarContrasenaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide : HTTP_INTERCEPTORS,
    useClass : SessionPersistanceInterceptor,
    multi : true
  },
  LoginGuard
],
  bootstrap: [AppComponent]
})
export class AppModule { }
