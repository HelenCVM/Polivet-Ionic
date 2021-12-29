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

  constructor(private recetaService: RecetaService,public router: Router) {
    console.log('------')
   }

  ngOnInit() {
    this.recetaService.$getObjectSource.subscribe(
      data=>{
        this.idConsultavreceta=data
        console.log('recibo id de consulta',data)

      }
    )
  }

  aceptar(){
    this.router.navigate(['/historia-det'])
  }

}
