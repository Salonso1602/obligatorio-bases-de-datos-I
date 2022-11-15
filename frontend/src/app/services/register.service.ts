import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../interfaces/iUser';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http : HttpClient) { }

  registerUser(user : IUser) : Observable<boolean>{
    return this.http.post<boolean>(url, user);
  }
}

const url = environment.backend_url+'/register';