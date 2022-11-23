import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http : HttpClient) { }

  authUser(user_id : string, password : string) : Observable<boolean>{
    return this.http.post<boolean>(url, {user_id : user_id, password : password}).pipe(
      tap(res =>{ if(res){this.setSession(user_id)}})
    )
  }

  private setSession(authResult : string) {
    localStorage.setItem('user_id', authResult)
  }       

  isLoggedIn(){
    return localStorage.getItem('user_id') !== null;
  }

  getCurrentUserId(){
    return localStorage.getItem('user_id');
  }

  logOut() {
    localStorage.removeItem('user_id');
  } 
}

const url = environment.backend_url+'/autenticacion';