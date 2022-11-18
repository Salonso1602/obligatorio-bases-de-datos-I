import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPermiso } from '../interfaces/iPermiso';

@Injectable({
  providedIn: 'root'
})
export class AppDummyService {

  constructor(private http : HttpClient) { }


  obtenerPermisosActivousuarios(user_id : string) : Observable<IPermiso[]> {
    return this.http.post<IPermiso[]>(url, {user_id : user_id});
  }

}

const url = "url";
