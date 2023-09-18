import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppointmentRequest } from 'src/app/models/appointment/AppointmentRequest';
import { User } from 'src/app/models/User';
import { AppointmentService } from 'src/app/services/appointment.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register-medical-appointment',
  templateUrl: './register-medical-appointment.component.html',
  styleUrls: ['./register-medical-appointment.component.css']
})
export class RegisterMedicalAppointmentComponent implements OnInit {
  formulario!: FormGroup;
  formSearchUserByEmail!: FormGroup;
  comboSpecialty:any;
  mensaje!: any;
  tituloMensajeVal: any;
  user: User = {};
  emailSearch: string="";
  checkChangeInput=false;
  appointmentRQ: AppointmentRequest = {};

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private appointmentService: AppointmentService,
    private router: Router) {
      this.iniciarFormulario();
      this.mensaje = "";
  }

  ngOnInit(): void {
  }

  iniciarFormulario() {
    this.comboSpecialty = ["Medicina General", "Nutricionista", "Odontología"];
    this.formulario = this.fb.group({
      dateTimeAppointment: ['', Validators.required],
      speciality: ['', Validators.required],
      observation: ['',]
    })
    this.formSearchUserByEmail = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    })
  }

  getUserByEMail(){
    this.userService.getUserByEmail(this.emailSearch).subscribe({
      next: (data) => {
        if(data==null){
          this.checkChangeInput=false;
          this.user = {};
          alert("Usuario no encontrado");
        }else{
        this.user = data;
        this.checkChangeInput=true;
      }
      },
      error: (err) => {
        this.checkChangeInput=false;
        alert("Usuario no encontrado");
      },
      complete: () => {
      },
    });
  }


  save() {
    this.appointmentRQ.userId = this.user.id;
    this.appointmentService.registerAppointment(this.appointmentRQ).subscribe({
      next: (data) => {
        confirm("Cita registrada con éxito");
        this.router.navigate(["list-medical-appointment"]);
      },
      error: (err) => {
        alert("Error al registrar la cita");
      },
      complete: () => {
      },
    });
  }

}
