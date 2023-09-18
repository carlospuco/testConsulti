import { Component, OnChanges, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { timeStamp } from 'console';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit{

  constructor(private router: Router) {
    //this.descPerfil=localStorage.getItem('descPerfil');
    /*this.usuarioService.descPerfil$.subscribe((res) => {
      this.descPerfil = res;
      console.log(this.descPerfil);
      });*/


  }

  ngOnInit(): void {
  }

  IsLoggedout() {
    this.router.navigate(['./login']);
    localStorage.clear();
    return localStorage.removeItem('usuario')
  }

}
