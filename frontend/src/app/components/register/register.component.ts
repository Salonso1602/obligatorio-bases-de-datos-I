import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb : FormBuilder) { }

  showPassword = false;
  secQuestions : string[] = ['Hola soy goku'];
  profileForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
    pregunta1: ['', Validators.required],
    respuesta1: ['', Validators.required],
    pregunta2: ['', Validators.required],
    respuesta2: ['', Validators.required],
    pregunta3: ['', Validators.required],
    respuesta3: ['', Validators.required]
  })
  formControls = this.profileForm.controls;
  formVals = this.profileForm.value;

  ngOnInit(): void {
    this.getSecQuestions();
  }

  togglePasswordView(){
    this.showPassword = !this.showPassword;
  }
  register(){

  }
  getSecQuestions(){
    //this.sq.getAllQuestions().subscribe(questions => this.secQuestions = questions);
  }

}
