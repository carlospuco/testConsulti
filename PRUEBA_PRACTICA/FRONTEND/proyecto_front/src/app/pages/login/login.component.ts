import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/models/LoginRequest';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario2!: FormGroup;
  visible:boolean=true;
  changetype:boolean=true;
  usuarioService:any;
  passwordService:any;
  flag:boolean=true;
  conf:boolean=true;
  docente: any;
  perfil:any;
  user: any;
  loginRequest: LoginRequest={};

  constructor(
    private fb:FormBuilder,
    private router: Router,
    private userService: UserService
    ) {
    this.iniciarFormulario();
  }

  ngOnInit(): void {
  }

  changeFlag(){
    this.flag = true;
  }

  iniciarFormulario(){
    this.formulario2=this.fb.group({
      usuario:['',Validators.required],
      password:['',Validators.required],
    })
  }

  consultar(){
    this.loginRequest.email = this.formulario2.value.usuario;
    this.loginRequest.password = this.formulario2.value.password;
    this.userService.login(this.loginRequest).subscribe({
      next: (user) => {
        this.user = user;
        localStorage.setItem('userId', this.user.id);
        this.router.navigate(['./home']);
      },
      error: (err) => {
        this.flag = false;
      },
      complete: () => {
      },
    });
  }

  mostrarcontrasenia(){
    this.visible=!this.visible;
    this.changetype=!this.changetype;
  }

}
