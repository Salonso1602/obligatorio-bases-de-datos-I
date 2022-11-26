import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecuperarContrasenaService } from 'src/app/services/recuperar-contrasena.service';

@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.component.html',
  styleUrls: ['./recuperar-contrasena.component.css']
})
export class RecuperarContrasenaComponent implements OnInit {

  pregunta?: string;

  ingresoDeUsuario : boolean = true;
  responderPregunta : boolean = false;
  cambiarContrasena : boolean = false;
  user_id!: string;

  constructor(private recuperarContrasena : RecuperarContrasenaService, private router : Router) { }

  ngOnInit(): void {
  }

  obtenerPreguntaUsuario(user_id : string){
    this.recuperarContrasena.obtenerPreguntaUsuario(user_id)
    .subscribe(result => {
      if(result.success){
        this.pregunta = result.data?.pregunta;
        this.user_id = user_id;
        alert('usuario correcto');
        this.ingresoDeUsuario = false;
        this.responderPregunta = true;
      }
    },
    err => {
      alert("usuario incorrecto");
    })
  }

  esRespuestaValida(respuesta : string) {
    this.recuperarContrasena.esRespuestaValida(this.user_id, respuesta)
    .subscribe(result => {
      alert("respuesta correcta")
      this.responderPregunta = false;
      this.cambiarContrasena = true;
    },
    err => {
      alert("respuesta incorrecta")
    })
  }

  cambioContrasena(contraseña : string, repetirContraseña : string) {
    if (contraseña != repetirContraseña) {
      alert("Las contraseñas no coinciden");
    }
    else{
      this.recuperarContrasena.cambiarContrasena(this.user_id, contraseña)
      .subscribe(result => {
        alert("contraseña modificada")
        this.router.navigate(['/login']);
      },
      err =>{
        alert("error interno, intente de vuelta mas tarde");
      })
    }
  }

}
