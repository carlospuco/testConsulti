import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ListUserComponent } from './pages/user/list-user/list-user.component';
import { ListMedicalAppointmentComponent } from './pages/medical-appointment/list-medical-appointment/list-medical-appointment.component';
import { RegisterMedicalAppointmentComponent } from './pages/medical-appointment/register-medical-appointment/register-medical-appointment.component';
import { EditUserComponent } from './pages/user/edit-user/edit-user.component';
import { EditMedicalAppointmentComponent } from './pages/medical-appointment/edit-medical-appointment/edit-medical-appointment.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {path: '', redirectTo:'/login' ,pathMatch:'full'},
  {path: 'login', component:LoginComponent},
  {path: 'list-user', component:ListUserComponent,canActivate:[AuthGuard]},
  {path: 'edit-user', component:EditUserComponent,canActivate:[AuthGuard]},
  {path: 'home', component:HomeComponent,canActivate:[AuthGuard]},
  {path: 'list-medical-appointment', component:ListMedicalAppointmentComponent,canActivate:[AuthGuard]},
  {path: 'register-medical-appointment', component:RegisterMedicalAppointmentComponent,canActivate:[AuthGuard]},
  {path: 'edit-medical-appointment', component:EditMedicalAppointmentComponent,canActivate:[AuthGuard]},
  {path: '**', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
