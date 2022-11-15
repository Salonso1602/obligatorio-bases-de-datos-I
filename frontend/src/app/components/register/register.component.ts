import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb : FormBuilder, private rs : RegisterService) { }

  showPassword = false;
  secQuestions : string[] = ['Hola soy goku'];
  profileForm = this.fb.group({
    email: ['', Validators.compose([Validators.email, Validators.required])],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  })
  userForm = this.fb.group({
    nombres: ['', Validators.required],
    apellidos: ['', Validators.required],
    direccion: ['', Validators.required],
    ciudad: ['', Validators.required],
    departamento: ['', Validators.required]
  });
  questionsForm = this.fb.group({
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
    const chk = this.formIsValid();
    if(chk.value === false){
      alert(chk.comment);
    } else{
      alert('done')
    }
  }

  getSecQuestions(){
    //this.sq.getAllQuestions().subscribe(questions => this.secQuestions = questions);
  }

  formIsValid() : {value : boolean, comment : string}{
    let result = {value: true, comment : ''};
    if(this.formControls.password.getRawValue() !== this.formControls.confirmPassword.getRawValue()){
      result.comment += 'Las contraseñas no coinciden\n'
      result.value = false;
    }
    if(this.profileForm.invalid){
      result.comment += 'Campos vacíos o erróneos\n'
      result.value = false;
    }
    if(this.userForm.invalid){
      result.comment += 'Datos Personales vacíos o erróneos\n'
      result.value = false;
    }
    if(this.formControls.email.invalid){
      result.comment += 'Correo Electrónico erróneo\n'
      result.value = false;
    }

    return result;
  }
}
