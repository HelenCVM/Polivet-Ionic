import { Component, OnInit,Input } from '@angular/core';
import {RecetaService} from 'src/app/Services/receta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crearreceta',
  templateUrl: './crearreceta.page.html',
  styleUrls: ['./crearreceta.page.scss'],
})
export class CrearrecetaPage implements OnInit {
  idConsultareceta:any
  public receta: any
  public buttonDisabled:boolean = false

  @Input() RecetaDetails = {
    prescripcion: '',rp: '',consulta_id: ''
  }

  constructor(private recetaService: RecetaService,public router: Router) {
    console.log('------')
  }

  ngOnInit() {
    this.recetaService.$getObjectSource.subscribe(
      data=>{
        this.idConsultareceta=data
        console.log('recibo id de consulta',data)

      }
    )
  }

  aceptar(){
    this.router.navigate(['/historia-det'])
  }

  guardar(){
    console.log('rp---',this.RecetaDetails.rp)
    console.log('prescrippcion---',this.RecetaDetails.prescripcion)
    this.RecetaDetails.consulta_id = this.idConsultareceta
    console.log('consulta_id',this.RecetaDetails.consulta_id)

    this.recetaService.crearReceta(this.RecetaDetails)
    .subscribe((data) => {
      console.log('estamos en la receta')
      this.receta = data
      this.buttonDisabled = true
      console.log('recibo',this.receta)
      //this.router.navigate(['/historia-det'])
    })
  }



}
