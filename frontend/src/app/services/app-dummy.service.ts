import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAppDummyItem } from '../interfaces/iAppDummyItem';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AppDummyService {

  constructor(private http : HttpClient) { }


  obtenerPermisosActivousuarios(user_id : string) : Observable<IAppDummyItem[]> {
    return this.http.post<IAppDummyItem[]>(url, {user_id : user_id});
  }

}

const url = environment.backend_url+'/dummy';
