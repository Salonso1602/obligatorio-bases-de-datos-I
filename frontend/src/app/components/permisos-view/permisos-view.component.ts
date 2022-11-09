import { Component, OnInit } from '@angular/core';
import { IPermiso, IPermisoFields } from 'src/app/interfaces/iPermiso';

@Component({
  selector: 'app-permisos-view',
  templateUrl: './permisos-view.component.html',
  styleUrls: ['./permisos-view.component.css']
})
export class PermisosViewComponent implements OnInit {

  allPermisosReqs? : IPermiso[];
  fields = IPermisoFields;

  constructor() { }

  ngOnInit(): void {
  }

}
