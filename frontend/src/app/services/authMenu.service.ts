import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthMenuService {

  constructor(private http : HttpClient, private usr : LoginService) { }

  authUser(app_id : string, rol_neg_id : string) : Observable<Boolean>{
    if(this.usr.isLoggedIn()){
      const menuUrl = `${url}?app_id=${app_id}&rol_neg_id=${rol_neg_id}`
      return this.http.get<Boolean>(menuUrl);
    }
    return of(false);
  }
}

const url = environment.backend_url + '/autenticacion/menu';