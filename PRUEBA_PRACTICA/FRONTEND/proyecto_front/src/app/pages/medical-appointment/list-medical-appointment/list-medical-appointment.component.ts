import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppointmentResponse } from 'src/app/models/appointment/AppointmentResponse';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-listar-medical-appointment',
  templateUrl: './list-medical-appointment.component.html'
})
export class ListMedicalAppointmentComponent implements OnInit {

  getAppointments$: Observable<AppointmentResponse[]>;
  appointmentsResponse: AppointmentResponse[]=[];

  constructor(
    private appointmentService: AppointmentService,
    private router: Router,
  ) {
    this.getAppointments$ = this.appointmentService.getAllAppointments();
  }

  ngOnInit(): void {
   this.getUsers();
  }

  getUsers() {
    this.getAppointments$.subscribe(getAppointment =>{
      this.appointmentsResponse = getAppointment;
    });
  }

  navigateCreateAppointment(){
    this.router.navigate(['register-medical-appointment']);
  }

  editAppointment(appointment:AppointmentResponse){
    console.log("data",appointment);
    this.appointmentService.setAppointment(null);
    this.appointmentService.setAppointment(appointment);
    this.router.navigate(['edit-medical-appointment']);
  }

  deleteAppointment(appointment:AppointmentResponse){
    this.appointmentService.deleteAppointment(appointment.id!).subscribe({
      next: (data) => {
        confirm("Cita médica eliminado con éxito");
        this.getUsers();
      },
      error: (err) => {
        alert("Error al eliminar la cita médica")
      },
      complete: () => {
      },
    })
  }
}
