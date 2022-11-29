import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IApp } from '../interfaces/iApp';
import { IRolNeg } from '../interfaces/iRolNeg';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class RequestRoleService {

  constructor(private http : HttpClient, private usr : LoginService) { }

  canRequest = this.usr.isLoggedIn();

  getRolesByApp(app_id : number) : Observable<IRolNeg[]> {
    return this.http.get<IRolNeg[]>(url + '/' + app_id);
  }
  
  getApps() : Observable<IApp[]> {
    return this.http.get<IApp[]>(url+'/appsDisponibles');
  }
  
  request(app_id : number , rol_neg_id : number) : Observable<boolean | null>{
    return this.http.post<boolean>(url + '/request', {user_id: this.usr.getCurrentUserId(), app_id : app_id, rol_neg_id : rol_neg_id, fechaSolicitud : new Date()})
    .pipe( catchError((err : HttpErrorResponse) => {
      if(err.status === 404){
        return of(false);
      }
      if(err.status === 201){
        return of(true);
      }
      else{
        return of(null)
      }
    }));
  }
}

const url = environment.backend_url + '/roles';