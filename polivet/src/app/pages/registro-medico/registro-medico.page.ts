import { Component, OnInit,Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {RegistromedicoService } from 'src/app/Services/registromedico.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  public form: FormGroup

  constructor(private formBuilder: FormBuilder,public router: Router,private actRoute: ActivatedRoute,public registromedi:RegistromedicoService) {
    this.obtenerEspecialidad();
   }

  ngOnInit():void {
    this.form=this.formBuilder.group( {
      cedula:['',
      [
        Validators.required,
        Validators.pattern('^[0-9]+$'),
        Validators.minLength(10)
      ]
      ],
      nombres:['',[Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]],
      apellidos:['',[Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]],
      direccion:['',[Validators.required]],
      fechnac:['',[Validators.required]],
      telefono:['',Validators.compose([
        Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(10)])],
      titulo:['',[Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]],
      espec:['',[Validators.required]],
      correo:['',[Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[u]+[p]+[s]+.[e]+[d]+[u]+.[e]+[c.]+$')]],
      contrasena:['',[Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z]).{8,}$')]]

    })
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

