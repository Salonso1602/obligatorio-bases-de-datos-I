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
  aplicativos : IAppDummyItem[] = [
    {
      user_id : "11111",
      nombreapp : "bombero",
      descripcion_menu : ["apagar fuego","rescatar gatos","prender fuego"]
    },
    {
      user_id : "11111",
      nombreapp : "algo",
      descripcion_menu : ["apagar fuego","rescatar gatos","prender fuego"]
    },
    {
      user_id : "11111",
      nombreapp : "otro mas",
      descripcion_menu : ["apagar fuego","rescatar gatos","prender fuego"]
    },
    {
      user_id : "11111",
      nombreapp : "frutilla",
      descripcion_menu : ["apagar fuego","rescatar gatos","prender fuego"]
    },
  ];

  menus : string[] = [];

  constructor(private appDummyService : AppDummyService) { }

  ngOnInit(): void {
    
  }

  obtenerPermisosActivousuarios(user_id : string) {
    this.appDummyService.obtenerPermisosActivousuarios(user_id)
      .subscribe(
        respuesta => this.aplicativos = respuesta
      );
  }

  mostrarMenu(aplicativoSelect : string) {
    alert(aplicativoSelect);
  }
}


