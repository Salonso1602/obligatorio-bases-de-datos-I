import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
              private getUserId : LoginService,
              private router : Router) { }

  ngOnInit(): void {
  }


  confirmarContrasena(contrasena : string) {
    const user_id = this.getUserId.getCurrentUserId();
    if (user_id != null){
      this.recuperarContrasena.comprobarSiContrasenaEsValida(user_id,contrasena)
      .subscribe( (result) => {
        this.contrasenaValida = result;
      });
    }
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
          this.router.navigate(['/home'])
        }
        else{
          alert("no se pudo cambiar la contraseña debido a un error interno");
        }
      });
    }
  }

}
