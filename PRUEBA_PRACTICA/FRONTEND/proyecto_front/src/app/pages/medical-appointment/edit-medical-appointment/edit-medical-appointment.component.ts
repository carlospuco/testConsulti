import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppointmentResponse } from 'src/app/models/appointment/AppointmentResponse';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-edit-medical-appointment',
  templateUrl: './edit-medical-appointment.component.html',
  styleUrls: ['./edit-medical-appointment.component.css']
})
export class EditMedicalAppointmentComponent implements OnInit {
  pipe = new DatePipe('en-US');
  formulario!: FormGroup;
  formSearchUserByEmail!: FormGroup;
  comboSpecialty:any;
  mensaje!: any;
  tituloMensajeVal: any;
  emailSearch: string="";
  checkChangeInput=false;
  appointmentRS: AppointmentResponse = {};

  constructor(
    private fb: FormBuilder,
    private appointmentService: AppointmentService,
    private router: Router) {
      this.iniciarFormulario();
      this.mensaje = "";
      this.appointmentService.appointment$.subscribe((res) => {
        if(res!=null){
          this.appointmentRS = res;
        }else{
          this.back();
        }
      });
      const dateTime = new Date(this.appointmentRS.dateTime!);
      const year = dateTime.getUTCFullYear();
      const month = (dateTime.getUTCMonth() + 1).toString().padStart(2, '0');
      const day = dateTime.getUTCDate().toString().padStart(2, '0');
      const hours = dateTime.getUTCHours().toString().padStart(2, '0');
      const minutes = dateTime.getUTCMinutes().toString().padStart(2, '0');
      const seconds = dateTime.getUTCSeconds().toString().padStart(2, '0');

      const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
      this.appointmentRS.dateTime= formattedDate;
  }

  ngOnInit(): void {
  }

  back(){
    this.router.navigate(["list-medical-appointment"]);
  }

  iniciarFormulario() {
    this.comboSpecialty = ["Medicina General", "Nutricionista", "Odontología"];
    this.formulario = this.fb.group({
      dateTimeAppointment: ['', Validators.required],
      speciality: ['', Validators.required],
      observation: ['',]
    })
  }

  save() {
    this.appointmentService.updateAppointment(this.appointmentRS).subscribe({
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
