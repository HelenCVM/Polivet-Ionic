import { Component, OnInit, Input} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MiperfilService} from '../../Services/miperfil.service';
import { IniciosesionService } from 'src/app/Services/iniciosesion.service';
import {RegistromedicoService } from 'src/app/Services/registromedico.service'

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.page.html',
  styleUrls: ['./mi-perfil.page.scss'],
})
export class MiPerfilPage implements OnInit {
  public correopda:any
  public Medico: any=[];
  public correoperfil:any
  public tipoespe:any
  public estado: boolean = true;
  public estadoFecha: boolean = true;
  public estadoEspe: boolean = true;
  opcionEspecialidad:any
  especialidad:any=[]
  miVariableHora: string
  dateFormat: string
  idespe:any
  fecha:any
  espec:any
  especid:any
  public medico: any

  @Input() MediDetails = {
    cedula:'',nombres: '', apellidos: '', direccion: '',
    fechaNac: '',correo: '',celular: '', titulo: '',
    especialidad_id: '',usuario_id: ''
  }


  constructor(private actRoute:ActivatedRoute,  public router: Router,private medicoservice: MiperfilService, public inicioservice: IniciosesionService,public registromedi:RegistromedicoService,public miperfilservice: MiperfilService) {
    this.obtenerEspecialidad();
    this.miperfilservice.$getObjectSource.subscribe(
      data=>{
        this.correoperfil=data
        console.log('reciboo desde paag inicial',this.correoperfil)
      }
    )
  }

  ngOnInit():void {
    /*
    this.inicioservice.$getObjectSource.subscribe(
      data=>{
        this.correoperfil=data
        console.log('reciboo desde paag inicial',this.correoperfil)
      }
    )
*/
    this.medicoservice.getMedico(this.correoperfil)
    .subscribe( (data) =>{
      console.log('ESTE ES EL CORREO',this.correoperfil)
      this.Medico=data;
      console.log(data);
      console.log('datos mas especificos')
      this.MediDetails.cedula = this.Medico.cedulaId
      this.MediDetails.nombres = this.Medico.nombres
      this.MediDetails.apellidos = this.Medico.apellidos
      this.MediDetails.direccion = this.Medico.direccion
      this.MediDetails.fechaNac = this.Medico.fechaNac
      this.fecha = this.Medico.fechaNac
      this.MediDetails.correo = this.Medico.usuario_id.correo
      this.MediDetails.celular = this.Medico.celular
      this.MediDetails.titulo = this.Medico.titulo
      this.MediDetails.especialidad_id = this.Medico.especialidad_id.especialidad_id
      this.espec = this.Medico.especialidad_id.tipoEspecialidad
      this.especid =this.Medico.especialidad_id.especialidad_id
      this.MediDetails.usuario_id = this.Medico.usuario_id.usuario_id
      console.log( this.MediDetails.cedula)
      console.log(this.Medico.especialidad_id.tipoEspecialidad)
      console.log(this.Medico.usuario_id.correo)
      this.tipoespe = this.Medico.especialidad_id.tipoEspecialidad
    }, (error) =>{
      console.log(error)
    }
    );



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
    if (this.estadoFecha === true) {
      this.MediDetails.fechaNac = this.fecha

    } else {
      this.MediDetails.fechaNac = this.dateFormat

    }
  }

  activar(event: CustomEvent){
    const cedula=event.detail.value
    console.log(cedula)

  }


  openModal()
  {
    if (this.estado === true || this.estadoEspe === true || this.estadoFecha ===true) {
      this.estado = false;
      this.estadoEspe = false;
      this.estadoFecha = false;
      // show Modal
    } else {
      this.estado = true;
      this.estadoEspe = true;
      this.estadoFecha = true;
      // hide Modal
    }
  }

  openModalFecha()
  {
    if (this.estadoFecha === true) {
      this.estadoFecha = false;
      // show Modal
    } else {
      this.estadoFecha = true;
      // hide Modal
    }
  }

  openModalespecialidad()
  {
    if (this.estadoEspe === true) {
      this.estadoEspe = false;
      // show Modal
    } else {
      this.estadoEspe = true;
      // hide Modal
    }
  }

  actualiza(){
      //this.openModalFecha
      //this.openModalespecialidad

  /*
    if (this.estadoFecha === true) {
      this.MediDetails.fechaNac = this.fecha
      //this.MediDetails.especialidad_id = this.especid

    } else {
      this.MediDetails.fechaNac = this.dateFormat
      //this.MediDetails.especialidad_id = this.opcionEspecialidad
    }
*/
    //this.MediDetails.fechaNac = this.dateFormat
    //this.MediDetails.especialidad_id=this.opcionEspecialidad

    console.log('datos de medico')
    console.log("cedula",this.MediDetails.cedula)
    console.log("nombres",this.MediDetails.nombres)
    console.log("apellidos",this.MediDetails.apellidos)
    console.log("direccion",this.MediDetails.direccion)
    console.log("fecha", this.MediDetails.fechaNac)

    console.log("correo",this.MediDetails.correo)
    console.log("celular",this.MediDetails.celular)
    console.log("titulo",this.MediDetails.titulo)
    console.log("especialidad_id",this.MediDetails.especialidad_id)
    console.log("usuario_id",this.MediDetails.usuario_id)


    this.registromedi.actualizarMedico(this.MediDetails)
    .subscribe((data) => {

      console.log('Estamos en el propietario')

      this.medico=data
      console.log("recibo",this.medico)
      this.router.navigate(['inicio-sesion'])
    },(error)=>{
      console.log(error)
    }
    );
  }
}

