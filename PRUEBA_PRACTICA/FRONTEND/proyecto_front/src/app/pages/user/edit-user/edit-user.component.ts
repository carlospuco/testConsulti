import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  selectedFile: File | null = null;
  formulario!: FormGroup;
  user: User = {};
  isEdit= false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router) {
      this.userService.user$.subscribe((res) => {
        if(res!=null){
          this.user = res;
          this.isEdit=true;
        }
        // if (this.user == null) {
        //   this.back();
        // }
      });
    this.startFormGroup();
  }

  back(){
    this.router.navigate(['list-user']);
  }

  ngOnInit() {
  }

  startFormGroup() {
    this.formulario = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      image:['', Validators.required]
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
  }

  save(){
    if(this.isEdit){
      this.userService.edit(this.user).subscribe({
        next: (data) => {
          confirm("Usuario Actualizado con éxito");
          this.router.navigate(['list-user']);
        },
        error: (err) => {
          alert("Error al actualizar los datos del Usuario\n"+err.error)
        },
        complete: () => {
        },
      })
    }else{
      this.userService.register(this.user).subscribe({
        next: (data) => {
          confirm("Usuario Guardado con éxito");
          this.router.navigate(['list-user']);
        },
        error: (err) => {
          alert("Error al guardar los datos del Usuario\n"+err.error)
        },
        complete: () => {
        },
      })
    }
  }
}