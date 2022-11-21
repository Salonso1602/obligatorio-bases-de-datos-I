import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PermisosViewComponent } from './components/permisos-view/permisos-view.component';
import { RegisterComponent } from './components/register/register.component';
import { RequestRoleComponent } from './components/request-role/request-role.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PermisosViewComponent,
    RegisterComponent,
    RequestRoleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
