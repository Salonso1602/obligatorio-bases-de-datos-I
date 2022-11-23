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
import { RequestRoleComponent } from './components/request-role/request-role.component';
import { SessionPersistanceInterceptor } from './services/session-persistance.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PermisosViewComponent,
    RegisterComponent,
    HomeComponent,
    RequestRoleComponent
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
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
