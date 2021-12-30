import { Component, OnInit } from '@angular/core';
import {RecetaService} from 'src/app/Services/receta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verreceta',
  templateUrl: './verreceta.page.html',
  styleUrls: ['./verreceta.page.scss'],
})
export class VerrecetaPage implements OnInit {
  idConsultavreceta:any
  Recetaver: any= []
  numeroTamano: any

  constructor(private recetaService: RecetaService,public router: Router) {
    console.log('------')

   }

  ngOnInit() {
    this.recetaService.$getObjectSource.subscribe(
      data=>{
        this.idConsultavreceta=data
        console.log('recibo id de consulta',data)
        this.listarecetaMedica()
      }
    )
  }

  aceptar(){
    this.router.navigate(['/historia-det'])
  }

  listarecetaMedica(){
    this.recetaService.listrecetaMedica(this.idConsultavreceta).subscribe(data => {
      this.Recetaver = data
      console.log('receta ver---',this.Recetaver)
      let tam =Object.keys(this.Recetaver).length
      this.numeroTamano = tam
    })
  }

  mostrarRecetaEsp(idConsultavreceta){
    console.log('mostrar receta a detalle')
  }
}
