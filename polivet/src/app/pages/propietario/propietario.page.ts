import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { Propietario } from 'src/app/Modelo/Propietario';
import { PropietarioServiceService } from 'src/app/Services/propietario-service.service';

@Component({
  selector: 'app-propietario',
  templateUrl: './propietario.page.html',
  styleUrls: ['./propietario.page.scss'],
})
export class PropietarioPage implements OnInit {

  constructor(public propietarioService: PropietarioServiceService) { }
  propietario: Propietario= new Propietario();
  ngOnInit() {
  }

  guardar(){
    console.log(this.propietario)
    this.propietarioService.crearPropietario(this.propietario)
    let navigationExtras: NavigationExtras={
      queryParams:{
        propietario: this.propietario
      }

    }


  }

}
