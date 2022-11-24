import { Component, OnInit } from '@angular/core';
import { IApp } from 'src/app/interfaces/iApp';
import { IAppDummyItem } from 'src/app/interfaces/iAppDummyItem';
import { IPermiso } from 'src/app/interfaces/iPermiso';
import { IUser } from 'src/app/interfaces/iUser';
import { AppDummyService } from 'src/app/services/app-dummy.service';

@Component({
  selector: 'app-app-dummy',
  templateUrl: './app-dummy.component.html',
  styleUrls: ['./app-dummy.component.css']
})
export class AppDummyComponent implements OnInit {

  user !: IUser;
  mostrar = false;
  aplicativoSeleccionado!: string;
  aplicativos : IAppDummyItem[] = [];

  menus : string[] = [];

  constructor(private appDummyService : AppDummyService) { }

  ngOnInit(): void {
    this.obtenerPermisosActivousuarios("11111111");
  }

  obtenerPermisosActivousuarios(user_id : string) {
    this.appDummyService.obtenerPermisosActivousuarios(user_id)
      .subscribe(
        respuesta => this.aplicativos = respuesta
      );
  }

  mostrarMenu(aplicativoSelect : string) {
    this.aplicativoSeleccionado = "para " + aplicativoSelect;
    this.aplicativos.forEach(
      aplicatvio => {
        if(aplicatvio.nombreapp === aplicativoSelect) {
          this.menus = aplicatvio.descripcion_menu;
        }
      }
    )
    console.log(this.menus)
  }
}


