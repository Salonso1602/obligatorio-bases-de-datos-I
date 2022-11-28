import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { RecuperarContrasenaService } from 'src/app/services/recuperar-contrasena.service';

@Component({
  selector: 'app-cambiar-contrasena',
  templateUrl: './cambiar-contrasena.component.html',
  styleUrls: ['./cambiar-contrasena.component.css']
})
export class CambiarContrasenaComponent implements OnInit {

  contrasenaValida = false;

  constructor(private recuperarContrasena : RecuperarContrasenaService,
              private getUserId : LoginService) { }

  ngOnInit(): void {
  }

  confirmarContrasena(contrasena : string) {
    this.contrasenaValida = true;
  }

  cambiarContrasena(c1 : string, c2: string) {
    if (c1 != c2) {
      alert("las contraseñas no coinciden");
    }
    else{
      const user_id = this.getUserId.getCurrentUserId();
      this.recuperarContrasena.cambiarContrasena(user_id, c1)
      .subscribe( (result) => {
        if(result.success){
          alert("contraseña cambiada");
        }
        else{
          alert("no se pudo cambiar la contraseña debido a un error interno");
        }
      });
    }
  }

}
