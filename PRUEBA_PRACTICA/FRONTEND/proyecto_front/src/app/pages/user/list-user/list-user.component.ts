import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-listar-user',
  templateUrl: './list-user.html'
})
export class ListUserComponent implements OnInit {

  getUsers$: Observable<User[]>;
  users: User[]=[];

  constructor(
    private userService: UserService,
    private router: Router,
  ) {
    this.getUsers$ = this.userService.getAllUsers();
  }

  ngOnInit(): void {
   this.getUsers();
  }

  getUsers() {
    this.getUsers$.subscribe(users =>{
      this.users = users;
    });
  }

  navigateCreateUser(){
    this.userService.setUser(null);
    this.router.navigate(['edit-user']);
  }

  editUser(user:User){
    this.userService.setUser(user);
    this.router.navigate(['edit-user']);
  }

  deleteUser(user:User){
    this.userService.deleteUser(user.id!).subscribe({
      next: (data) => {
        confirm("Usuario eliminado con éxito");
        this.getUsers();
      },
      error: (err) => {
        alert("Error al eliminar el usuario")
      },
      complete: () => {
      },
    })
  }
}
