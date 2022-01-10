import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropietarioServiceService } from 'src/app/Services/propietario-service.service';
import {LocalstoreService} from '../../Services/localstore.service';

@Component({
  selector: 'app-propietario-detale',
  templateUrl: './propietario-detale.page.html',
  styleUrls: ['./propietario-detale.page.scss'],
})
export class PropietarioDetalePage implements OnInit {
  idPropietario:any
  propietario:any=[]
  listMascotabyPropietario: any=[]
  private _localStorage: Storage;

  constructor(private _localStorageRefService: LocalstoreService,private propietarioService:PropietarioServiceService,public router: Router) {
    this._localStorage = _localStorageRefService.localStorage

    this.propietarioService.$getObjectSource.subscribe(
      data=>{
        this.idPropietario=data
        console.log("recibo id propie desde historia det", this.idPropietario)
        this.obtenerPropietarioBYId()
        this.obtenerMascotaByid()
      }
    )
  }

  ngOnInit() {
    if(this._localStorage.length < 1){
      this.router.navigate(['/inicio-sesion'])
    }

  }

  obtenerPropietarioBYId(){
    this.propietarioService.listarPropietarioById(this.idPropietario).subscribe((data=>{
      this.propietario=data
      console.log("consumiendo by id", this.propietario)
    }))
  }

  obtenerMascotaByid(){
    this.propietarioService.listarMascotaByIdPropietario(this.idPropietario).subscribe((data=>{
      this.listMascotabyPropietario=data
      console.log("Mascotassss",this.listMascotabyPropietario)

    }))
  }
 // this.router.navigate(['/mascota/',this.InicioDetails.idPropietario])
 agregarMascota(){
  this.router.navigate(['/mascota/',this.idPropietario])
 }

 atras(){
  this.router.navigate(['/listar-propietarios'])
}
}
