import { Component, OnInit,Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {RegistromedicoService } from 'src/app/Services/registromedico.service'

@Component({
  selector: 'app-registro-medico',
  templateUrl: './registro-medico.page.html',
  styleUrls: ['./registro-medico.page.scss'],
})
export class RegistroMedicoPage implements OnInit {
  opcionEspecialidad:any
  especialidad:any=[]
  public medico: any
  miVariableHora: string
  dateFormat: string
  idespe:any

  @Input() MedicoDetails = {
    cedula:'',nombres: '', apellidos: '', direccion: '',
    fechaNac: '',correo: '',contrasena: '',celular: '', titulo: '',
    especialidad_id: '',usuario_id: ''
  }

  constructor(public router: Router,private actRoute: ActivatedRoute,public registromedi:RegistromedicoService) {
    this.obtenerEspecialidad();
   }

  ngOnInit() {
  }

  atras(){
    this.router.navigate(['inicio-sesion'])
  }

  guardarEspecialidad(event: CustomEvent){
    this.opcionEspecialidad=event.detail.value
    console.log("especialidad",this.opcionEspecialidad)
  }



  obtenerEspecialidad(){
    this.registromedi.obtenerEspecialidad()
    .subscribe((data) => {
      this.especialidad=data
      console.log('Estamos en el especieee pag princi')
      console.log(this.especialidad)


    },(error)=>{
      console.log(error)
    }
    );
  }

  guardarFechaNac(evento){
    this.miVariableHora = evento.detail.value
    this.dateFormat = this.miVariableHora.split('T')[0];
    console.log("fecha", this.dateFormat);
  }

  guardar(){
    this.MedicoDetails.fechaNac = this.dateFormat
    this.MedicoDetails.especialidad_id=this.opcionEspecialidad
    console.log('datos de medico')
    console.log("cedula",this.MedicoDetails.cedula)
    console.log("nombres",this.MedicoDetails.nombres)
    console.log("apellidos",this.MedicoDetails.apellidos)
    console.log("direccion",this.MedicoDetails.direccion)
    console.log("fecha",this.dateFormat)

    console.log("correo",this.MedicoDetails.correo)
    console.log("contraseña",this.MedicoDetails.contrasena)

    console.log("celular",this.MedicoDetails.celular)
    console.log("titulo",this.MedicoDetails.titulo)
    console.log("especialidad_id",this.MedicoDetails.especialidad_id)
    //this.registromedi.crearUsuario



    this.registromedi.crearUsuario(this.MedicoDetails)
    .subscribe((data) => {

      console.log('Estamos en el propietario')

      this.medico=data
      console.log("recibo",this.medico)
      this.router.navigate(['paginal-inicial'])
    },(error)=>{
      console.log(error)
    }
    );


  }

}

