import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const url = environment.backend_url+'/recuperarContrasena';

@Injectable({
  providedIn: 'root'
})
export class RecuperarContrasenaService {

  constructor(private http : HttpClient) { }

  obtenerPreguntaUsuario(user_id : string) : Observable<{
    success : boolean,
    message? : string,
    data?: {pregunta:string}
  }> {
    return this.http.get<{
      success : boolean,
      message? : string,
      data?: { pregunta : string }
    }>(`${url}/${user_id}`);
  }

  esRespuestaValida(user_id:string, respuesta : string) :Observable<{
    success : boolean,
    messsage : string
  }> {
    return this.http.post<{
      success : boolean,
      messsage : string
    }> (`${url}/${user_id}`,{respuesta: respuesta})
  }

  cambiarContrasena(user_id: string | null, newPassword: string) :Observable<{
    success : boolean,
    messsage : string
  }> {
    if(user_id === null)
      user_id = "1";

    return this.http.post<{
      success : boolean,
      messsage : string
    }> (url,{
      user_id : user_id,
      newPassword : newPassword
    });
  }

}
