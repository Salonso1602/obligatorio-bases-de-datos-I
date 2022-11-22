import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IApp } from '../interfaces/iApp';
import { IRolNeg } from '../interfaces/iRolNeg';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class RequestRoleService {

  constructor(private http : HttpClient, private usr : LoginService) { }

  getRolesByApp(app_id : number) : Observable<IRolNeg[]> {
    return this.http.get<IRolNeg[]>(url + '/' + app_id);
  }
  
  getApps() : Observable<IApp[]> {
    return this.http.get<IApp[]>(url+'/appsDisponibles');
  }
  
  request(app_id : number , rol_neg_id : number) : Observable<boolean>{
    return this.http.post<boolean>(url + '/request', {user_id: this.usr.currentUserId, app_id : app_id, rol_neg_id : rol_neg_id, fechaSolicitud : new Date()});
  }
}

const url = environment.backend_url + '/roles';