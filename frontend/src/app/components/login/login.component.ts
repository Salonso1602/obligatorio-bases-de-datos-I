import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';

import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  showPassword = false;
  triedLogin = false;
  profileForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  constructor(private fb : FormBuilder, private lg : LoginService, private router : Router) { }

  ngOnInit(): void {
  }

  login(){
    this.lg.authUser(this.profileForm.value.email!, this.profileForm.value.password!).subscribe(authenticated => {
      if (!authenticated){
        this.triedLogin = true;
        alert('meesss')
    } else{
      this.triedLogin = false;
      //placeholder para hacer algo si loggea
      this.router.navigate(['/adminPermisos'])
    }})
  }

  togglePasswordView(){
    this.showPassword = !this.showPassword;
  }
  

}
