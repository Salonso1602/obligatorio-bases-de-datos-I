import { Component, OnInit } from '@angular/core';
import { estadosPermiso } from 'src/app/enums/estadosPermisos';
import { IPermiso, IPermisoFields } from 'src/app/interfaces/iPermiso';
import { PermisosService } from 'src/app/services/permisos.service';

@Component({
  selector: 'app-permisos-view',
  templateUrl: './permisos-view.component.html',
  styleUrls: ['./permisos-view.component.css']
})
export class PermisosViewComponent implements OnInit {

  allPermisosReqs? : IPermiso[];
  fields = IPermisoFields;
  states = estadosPermiso;

  constructor(private permisoService : PermisosService) { }

  ngOnInit(): void {
    this.getRequests()
  }

  getRequests(){
    this.permisoService.getAllPermisoRequests().subscribe(reqs => {
      this.allPermisosReqs = reqs
    })
  }

  resolveRequest(permiso : IPermiso, newState : estadosPermiso){
    this.permisoService.resolveRequest(permiso, newState).subscribe(()=> this.getRequests());
  }

  isApproved(permiso : IPermiso) : boolean{
    return permiso.estado === estadosPermiso.Autorizado;
  }
}
