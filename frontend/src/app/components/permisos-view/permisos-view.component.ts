import { Component, OnInit } from '@angular/core';
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

  constructor(private permisoService : PermisosService) { }

  ngOnInit(): void {
    this.getRequests()
  }

  getValues(obj : Object){
    return Object.values(obj);
  }

  getRequests(){
    this.permisoService.getAllPermisoRequests().subscribe(reqs => {
      this.allPermisosReqs = reqs
    })
  }

  approveRequest(permiso : IPermiso){
    this.permisoService.approveRequest(permiso).subscribe(()=> this.getRequests());
  }

}
