import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPermiso } from '../interfaces/iPermiso';

@Injectable({
  providedIn: 'root'
})
export class PermisosService {

  constructor(private http : HttpClient) { }

  getAllPermisoRequests() : Observable<IPermiso[]>{
    return this.http.get<IPermiso[]>(url);
  }

  approveRequest(permiso : IPermiso) : Observable<any>{
    return this.http.post(url, permiso);
  }
}

const url = environment.backend_url+'/permisos';