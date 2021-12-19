import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultamedicaService } from 'src/app/Services/consultamedica.service';

@Component({
  selector: 'app-consultadet',
  templateUrl: './consultadet.page.html',
  styleUrls: ['./consultadet.page.scss'],
})
export class ConsultadetPage implements OnInit {
  idConsultaDetalle:any
  constantesDet: any=[]
  consultaByIds:any=[]
  constructor(private consultaService: ConsultamedicaService, public router: Router) { 
    console.log("Consulta detalle")
  }

  ngOnInit() {
    this.consultaService.$getObjectSource2.subscribe(
      data=>{     
        this.idConsultaDetalle=data 
        console.log('reciboo desde historia detalle la consulta id',data)
        this.listDetalles()
        this.listConsultaById()
      }
    )

  }

  listDetalles(){
    this.consultaService.detalleByConstanteDet(this.idConsultaDetalle).subscribe(data=>{
      this.constantesDet=data
      console.log(this.constantesDet)
    //  this.consultasMedicas=data
    })
    //console.log("consulllllllll",this.consultasMedicas)
  }
  listConsultaById(){
    this.consultaService.obtenerConsultaById(this.idConsultaDetalle).subscribe(data=>{
      this.consultaByIds=data
      console.log(this.consultaByIds)
    //  this.consultasMedicas=data
    })
  }
  aceptar(){
    this.router.navigate(['/historia-det'])
  }

}
