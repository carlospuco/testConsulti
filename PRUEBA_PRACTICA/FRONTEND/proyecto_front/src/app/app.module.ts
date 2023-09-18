import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { ListUserComponent } from './pages/user/list-user/list-user.component';
import { ListMedicalAppointmentComponent } from './pages/medical-appointment/list-medical-appointment/list-medical-appointment.component';
import { RegisterMedicalAppointmentComponent } from './pages/medical-appointment/register-medical-appointment/register-medical-appointment.component';
import { HomeComponent } from './pages/home/home.component';
import { EditUserComponent } from './pages/user/edit-user/edit-user.component';
import { EditMedicalAppointmentComponent } from './pages/medical-appointment/edit-medical-appointment/edit-medical-appointment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    ListMedicalAppointmentComponent,
    RegisterMedicalAppointmentComponent,
    EditMedicalAppointmentComponent,
    ListUserComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
