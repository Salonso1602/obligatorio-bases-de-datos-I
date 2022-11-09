import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PermisosService {

  constructor(private http : HttpClient) { }
}

const url = environment.backend_url+'permisos/';