import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})
export class InicioSesionPage implements OnInit {
  correo: string
  contrasena: string
  constructor(public router: Router) { }

  ngOnInit() {
  }
  loguin(){
    console.log("probnando")
    this.router.navigate(['paginal-inicial'])
  }

}
