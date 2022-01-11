import { Component, Input, OnInit } from '@angular/core';
import { Raza } from 'src/app/Modelo/Mascota';
import { MascotaServiceService } from 'src/app/Services/mascota-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {LocalstoreService} from '../../Services/localstore.service';

@Component({
  selector: 'app-raza-especie',
  templateUrl: './raza-especie.page.html',
  styleUrls: ['./raza-especie.page.scss'],
})
export class RazaEspeciePage implements OnInit {
  raza: Raza;
  cp=1
  nombre: string
  especies: any = []
  idEspecie: any

  public estado: boolean = true;
  private _localStorage: Storage;

  constructor(private _localStorageRefService: LocalstoreService,public mascotaService: MascotaServiceService,public router: Router) {
    this._localStorage = _localStorageRefService.localStorage
    this.obtenerEspecie()
  }

  ngOnInit() {
    if(this._localStorage.length < 1){
      this.router.navigate(['/inicio-sesion'])
    }
    this.obtenerEspecie()
  }
  obtenerEspecie() {
    this.mascotaService.obtenerEspecie()
      .subscribe((data) => {
        this.especies = data
        console.log('Estamos en el especiee pag princi')
        console.log(this.especies)

      }, (error) => {
        console.log(error)
      }
      );
  }

  addNew() {
    this.raza = {
      nombreEspecie: ''

    }

    return true
  }
  async guardarEspecie() {

    console.log("Especueeeeee", this.raza)
    /*  this.mascotaService.crearEspecie(this.raza).subscribe((data => {
        console.log(data)
        this.obtenerEspecie()

      }))*/
    if (this.estado == false) {
      console.log("hola")
      console.log(this.idEspecie)
      this.estado = true

      this.mascotaService.editarEspecie(this.idEspecie, this.raza.nombreEspecie).subscribe((dataa => {
        console.log(dataa)
        this.estado = true

      }))
    }

    else {
      console.log("guardamos")
      this.mascotaService.crearEspecie(this.raza).subscribe((data => {
        console.log(data)
        this.obtenerEspecie()

      }))
    }

  }
  editar(item) {
    this.raza = item
    console.log("emtraaaaa", this.raza.nombreEspecie)
    this.estado = false
    this.idEspecie=this.raza.especie_id

  }

  async eliminar(item:Raza){
    const res = await this.mascotaService.presentAlert('Alerta', '¿Seguro que desea eliminar?')
    console.log(res)
    console.log(item)
    if(res ==true){
      this.mascotaService.eliminarEspecie(item.especie_id).subscribe((data=>{
        this.obtenerEspecie()
        console.log(data)

      }))
    }else{
      console.log("nooooo")
      this.obtenerEspecie()

    }

  }

  atras(){
    this.router.navigate(['/paginal-inicial'])
  }


}
