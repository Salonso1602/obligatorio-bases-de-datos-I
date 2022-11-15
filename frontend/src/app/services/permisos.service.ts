import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { estadosPermiso } from '../enums/estadosPermisos';
import { IPermiso } from '../interfaces/iPermiso';

@Injectable({
  providedIn: 'root'
})
export class PermisosService {

  constructor(private http : HttpClient) { }

  getAllPermisoRequests() : Observable<IPermiso[]>{
    return this.http.get<IPermiso[]>(url);
  }

  resolveRequest(permiso : IPermiso, newState : estadosPermiso) : Observable<any>{
    return this.http.post(url, {permiso : permiso, estadoNuevo : newState});
  }
}

const url = environment.backend_url+'/permisos';