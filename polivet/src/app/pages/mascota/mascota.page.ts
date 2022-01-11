import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MascotaServiceService } from 'src/app/Services/mascota-service.service';
import {LocalstoreService} from '../../Services/localstore.service';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.page.html',
  styleUrls: ['./mascota.page.scss'],
})
export class MascotaPage implements OnInit {
  idPropietario: any
  opcionSexo: any
  opcionEspecie:any
  opcionRaza:any
  miVariableHora: string
  dateFormat: string
  public mascota: any
  razas: any=[];
  especies:any=[]
  idEspecie:any

    age: any
    showAge:any
    private _localStorage: Storage;

  @Input() InicioDetails = {
    idPro:'',nombre: '', especie: '', raza: '',
    sexo: '', fechaNac: '', edad: '',
    coloYSenalesParti: ''
  }
  public form: FormGroup
  constructor(private _localStorageRefService: LocalstoreService,private formBuilder: FormBuilder,private actRoute: ActivatedRoute, public router: Router, public mascotaService: MascotaServiceService) {
    this._localStorage = _localStorageRefService.localStorage
    this.idPropietario = actRoute.snapshot.params.idPropietario;
    console.log("idpropie", this.idPropietario)

    this.obtenerEspecie();
  }

  ngOnInit() {
    if(this._localStorage.length < 1){
      this.router.navigate(['/inicio-sesion'])
    }
    this.form=this.formBuilder.group( {

      mascota:['',[Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]],
      coloYSenalesParti:['',[Validators.required,Validators.pattern(/^[a-zA-Z ]+$/)]]
    })
  }

  guardarSexo(event: CustomEvent) {

    this.opcionSexo = event.detail.value
    console.log("sexo", this.opcionSexo)

  }
  guardarEspecie(event: CustomEvent) {

    this.opcionEspecie=event.detail.value
    console.log("especie",this.opcionEspecie,)
    this.idEspecie=this.opcionEspecie;
    this.obtenerRaza()
  }
  guardarRaza(event: CustomEvent) {
    this.opcionRaza=event.detail.value
    console.log("raza",this.opcionRaza)

  }


  guardarFechaNac(evento) {
    this.miVariableHora = evento.detail.value
    this.dateFormat = this.miVariableHora.split('T')[0];

    console.log("holaa", this.dateFormat);
    if(this.dateFormat){
      const convertAge = new Date(this.dateFormat);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      this.showAge = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
      var todayDate=new Date();
      var ageyear = todayDate.getFullYear() - convertAge.getFullYear();
      var agemonth = todayDate.getMonth() - convertAge.getMonth();
      var ageday = todayDate.getDate() - convertAge.getDate();

      if(agemonth != 0 && ageyear !=0){
        this.showAge=ageyear +" anios "+ " con "+ agemonth + ' meses y '  + ageday+ " dias"
        console.log( ageyear +" anios "+ " con "+ agemonth + ' meses y '  + ageday+ " dias");

      } else if (agemonth!=0 && ageyear==0) {
        this.showAge=agemonth + ' meses y '  + ageday+ " dias"
        console.log(  agemonth + ' meses y '  + ageday+ " dias");

      } else {

      }

      if(ageyear ==0 && agemonth==0){
        this.showAge=ageday+ " dias"
        console.log(ageday+ " dias");

      }

    }




  }
  guardarMascota() {
    console.log("mascota sexo", this.opcionSexo,"raza",this.opcionRaza,"especie",this.opcionEspecie)
    this.InicioDetails.sexo = this.opcionSexo
    this.InicioDetails.especie=this.opcionEspecie
    this.InicioDetails.raza=this.opcionRaza
    this.InicioDetails.fechaNac = this.dateFormat
    this.InicioDetails.idPro=this.idPropietario
    this.InicioDetails.fechaNac=this.showAge
    console.log(this.InicioDetails)
    this.mascotaService.crearMascota(this.InicioDetails)
    .subscribe((data) => {

      console.log('Estamos en el propietario')

      this.mascota=data
      console.log("recibo",this.mascota)
      this.router.navigate(['/consulta-medica/',this.mascota])


    },(error)=>{
      console.log(error)
    }
    );
  }

  obtenerEspecie(){
    this.mascotaService.obtenerEspecie()
    .subscribe((data) => {
      this.especies=data
      console.log('Estamos en el especiee pag princi')
      console.log(this.especies)

    },(error)=>{
      console.log(error)
    }
    );
  }

  obtenerRaza(){
    console.log(this.idEspecie)
    this.mascotaService.obtenerRaza(this.idEspecie)
    .subscribe((data) => {
      this.razas=data
      console.log('Estamos en el especieee pag princi')



    },(error)=>{
      console.log(error)
    }
    );
  }

}
