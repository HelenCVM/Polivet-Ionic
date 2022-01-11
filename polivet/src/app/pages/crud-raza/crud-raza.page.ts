import { Component, OnInit } from '@angular/core';
import { Raza } from 'src/app/Modelo/Mascota';
import { MascotaServiceService } from 'src/app/Services/mascota-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {LocalstoreService} from '../../Services/localstore.service';

@Component({
  selector: 'app-crud-raza',
  templateUrl: './crud-raza.page.html',
  styleUrls: ['./crud-raza.page.scss'],
})
export class CrudRazaPage implements OnInit {
  especies:any=[]
  opcionEspecie:any
  idEspecie:any
  razas: any=[];
  cp=1
  raza: Raza;
  especie: any
  public estado: boolean = true;
  private _localStorage: Storage;
  razaId:any


  constructor(private _localStorageRefService: LocalstoreService,public mascotaService: MascotaServiceService, public router: Router) {
    this._localStorage = _localStorageRefService.localStorage
    this.obtenerEspecie();

   }

  ngOnInit() {
    if(this._localStorage.length < 1){
      this.router.navigate(['/inicio-sesion'])
    }
  }
  obtenerEspecie(){
    this.mascotaService.obtenerEspecie()
    .subscribe((data) => {
      this.especies=data
      console.log('Estamos en el especiee pag princi', this.especies)
      console.log(this.especies)

    },(error)=>{
      console.log(error)
    }
    );
  }
  addNew() {
    this.raza = {
      nombre: '',
      nombreEspecie:''
    }
    return true
  }
  guardarEspecie(event: CustomEvent) {

    this.opcionEspecie=event.detail.value
    console.log("especie",this.opcionEspecie,)
    this.idEspecie=this.opcionEspecie;
    this.obtenerRaza()
  }

  guardarEspecies(event: CustomEvent) {

    this.especie=event.detail.value
    console.log("especie",this.especie,)
    this.raza.nombreEspecie=this.especie
  }

  obtenerRaza(){
    console.log(this.idEspecie)
    this.mascotaService.obtenerRaza(this.idEspecie)
    .subscribe((data) => {
      this.razas=data
      console.log('Estamos en el especieee pag princi', this.razas)



    },(error)=>{
      console.log(error)
    }
    );
  }

  guardarRaza(){
    if(this.estado==false){
      console.log(this.razaId)
      this.estado=true
      this.mascotaService.editarRaza(this.razaId,this.raza.nombre,this.raza.nombreEspecie).subscribe
      ((dataa=>{
        console.log(dataa)
        this.estado=true
        this.obtenerRaza()

      }))


    }else{
      console.log("raza", this.raza)
      this.mascotaService.crearRaza(this.raza).subscribe((data=>{
        console.log(data)
        this.obtenerRaza()

      }))
    }


  }


  editar(item) {
    this.raza = item
    console.log("emtraaaaa", this.raza)
    this.estado = false
    this.razaId=this.raza.raza_id
    console.log(this.razaId)

  }

  async eliminar(item:Raza){
    const res = await this.mascotaService.presentAlert('Alerta', '¿Seguro que desea eliminar?')
    console.log(res)
    console.log(item)
    if(res ==true){
      this.mascotaService.eliminarRaza(item.raza_id).subscribe((data=>{
        this.obtenerRaza()
        console.log(data)

      }))
    }else{
      console.log("nooooo")
      this.obtenerRaza()

    }

  }

  atras(){
    this.router.navigate(['/paginal-inicial'])
  }

}
