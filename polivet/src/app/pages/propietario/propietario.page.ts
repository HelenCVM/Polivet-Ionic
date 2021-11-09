import { Component, OnInit } from '@angular/core';
import { Propietario } from 'src/app/Modelo/Propietario';

@Component({
  selector: 'app-propietario',
  templateUrl: './propietario.page.html',
  styleUrls: ['./propietario.page.scss'],
})
export class PropietarioPage implements OnInit {

  constructor() { }
  propietario: Propietario= new Propietario();
  ngOnInit() {
  }

}
