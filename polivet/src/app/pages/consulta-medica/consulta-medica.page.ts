import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-consulta-medica',
  templateUrl: './consulta-medica.page.html',
  styleUrls: ['./consulta-medica.page.scss'],
})
export class ConsultaMedicaPage implements OnInit {
  idMascota: any
  @Input() InicioDetails = {
   peso: '',t:'',fcard:'',fres:'',mucosas:'',asa:'', turgenciaPiel:''
   , pulso:'', otras:'', estadoFisico:'', estadoMental:'',
  }


  constructor(private actRoute: ActivatedRoute) {
    this.idMascota=actRoute.snapshot.params.idMascota;
    console.log(this.idMascota)

   }

  ngOnInit() {
  }

}
