import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.page.html',
  styleUrls: ['./mascota.page.scss'],
})
export class MascotaPage implements OnInit {
  idPropietario: any
  opcionSexo: any
  @Input() InicioDetails = {
    idMascota: '',nombre:'',especie:'', raza: '',
    sexo: '', fechaNac: '', edad: '',
    colorYSenalesParti: ''
  }

  constructor(private actRoute: ActivatedRoute, public router: Router) {
    this.idPropietario = actRoute.snapshot.params.idPropietario;
    console.log("en mascota", this.idPropietario)
  }

  ngOnInit() {
  }

  guardarMascota(event: CustomEvent){
    console.log(event.detail.value)
    this.opcionSexo=event.detail.value

  }
}
