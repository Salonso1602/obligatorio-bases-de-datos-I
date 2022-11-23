import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthMenuService } from 'src/app/services/authMenu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authMenu : AuthMenuService, private router : Router) { }

  ngOnInit(): void {
  }

  adminPermisosView(app_id : string, rol_neg_id: string){
    this.authMenu.authUser(app_id,rol_neg_id).subscribe(result => {
      
      if(result){
        this.router.navigate(['/adminPermisos'])
      }
      alert("Falta autorización para acceder a este menú.")
    });
  }

}
