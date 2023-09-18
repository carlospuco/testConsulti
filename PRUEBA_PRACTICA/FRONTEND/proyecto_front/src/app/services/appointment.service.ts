import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppointmentRequest } from '../models/appointment/AppointmentRequest';
import { AppointmentResponse } from '../models/appointment/AppointmentResponse';
import { BehaviorSubject } from 'rxjs';


const URL = "http://localhost:5000";
const APPOINTMENT = URL + '/appointments';

@Injectable({
  providedIn: 'root'
})

export class AppointmentService {
  private appointment$$ = new BehaviorSubject<AppointmentResponse | null>(null);
  appointment$ = this.appointment$$.asObservable();

  constructor(private http: HttpClient) { }

  getAllAppointments() {
    return this.http.get<AppointmentResponse[]>(`${APPOINTMENT}/list`);
  }

  registerAppointment(appointment: AppointmentRequest){
    return this.http.post<any>(`${APPOINTMENT}/schedule`,appointment);
  }

  updateAppointment(appointment: AppointmentResponse){
    return this.http.put<any>(`${APPOINTMENT}/${appointment.id}`,appointment);
  }

  deleteAppointment(idAppointment:number){
    return this.http.delete<void>(`${APPOINTMENT}/${idAppointment}`);
  }

  setAppointment(appointment:AppointmentResponse|null){
    this.appointment$$.next(appointment);
  }

}
