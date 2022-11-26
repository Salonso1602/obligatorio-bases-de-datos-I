import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private router : Router) { }

  canActivate() : boolean {
    const id = localStorage.getItem('user_id');
    if(id){
      return true;
    } else{
      alert('Debe iniciar sesión');
      this.router.navigate(['login']);
      return false;
    }
  }
}
