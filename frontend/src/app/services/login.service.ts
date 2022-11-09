import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  constructor(http : HttpClient) { }

  authUser(email : string, password : string) : Observable<boolean>{
    return of(true);
  }
}

const url = environment.backend_url+'login/';