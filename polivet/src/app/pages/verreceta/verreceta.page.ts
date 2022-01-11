import { Component, OnInit } from '@angular/core';
import {RecetaService} from 'src/app/Services/receta.service';
import { Router } from '@angular/router';
import {LocalstoreService} from '../../Services/localstore.service';

@Component({
  selector: 'app-verreceta',
  templateUrl: './verreceta.page.html',
  styleUrls: ['./verreceta.page.scss'],
})
export class VerrecetaPage implements OnInit {
  idConsultavreceta:any
  Recetaver: any= []
  numeroTamano: any
  private _localStorage: Storage;

  constructor(private _localStorageRefService: LocalstoreService,private recetaService: RecetaService,public router: Router) {
    console.log('------')
    this._localStorage = _localStorageRefService.localStorage
    this.recetaService.$getObjectSource.subscribe(
      data=>{
        this.idConsultavreceta=data
        console.log('recibo id de consulta',data)
        this.listarecetaMedica()
      }
    )
   }

  ngOnInit() {
    if(this._localStorage.length < 1){
      this.router.navigate(['/inicio-sesion'])
    }
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
    this.recetaService.enviandoIdConsulta(idConsultavreceta)
    this.router.navigate(['/receta-detalle'])
  }

  eliminarReceta(idConsultavreceta){
    this.recetaService.eliminarlReceta(idConsultavreceta).subscribe(data => {
      this.Recetaver = data
      console.log('receta eliminar---',this.Recetaver)
      this.router.navigate(['/historia-det'])
    })
  }

}
