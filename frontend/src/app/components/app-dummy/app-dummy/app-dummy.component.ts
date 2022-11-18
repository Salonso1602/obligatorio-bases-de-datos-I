import { Component, OnInit } from '@angular/core';
import { IApp } from 'src/app/interfaces/iApp';
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
  permisos !: IPermiso[];

  constructor(private appDummyService : AppDummyService) { }

  ngOnInit(): void {
    
  }

  obtenerPermisosActivousuarios(user_id : string) {
    this.appDummyService.obtenerPermisosActivousuarios(user_id)
      .subscribe(
        permisos => this.permisos = permisos
      );
  }

}
