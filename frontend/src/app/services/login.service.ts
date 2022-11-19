import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  constructor(private http : HttpClient) { }

  authUser(user_id : string, password : string) : Observable<boolean>{
    return this.http.post<boolean>(url, {user_id : user_id, password : password});
  }
}

const url = environment.backend_url+'/autenticacion';