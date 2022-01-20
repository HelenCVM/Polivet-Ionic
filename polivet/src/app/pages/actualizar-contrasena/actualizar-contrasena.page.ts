import { Component, OnInit,Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import {RecordarContraService} from '../../Services/recordar-contra.service';
import {Usuario} from 'src/app/Modelo/Usuario';
import { AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-actualizar-contrasena',
  templateUrl: './actualizar-contrasena.page.html',
  styleUrls: ['./actualizar-contrasena.page.scss'],
})
export class ActualizarContrasenaPage implements OnInit {
  public dataa:any
  //public Usuario: any=[];
  public correoo: any
  public contrasenaa: any

  @Input() ContraNuevaDetails = {
    correo:'',contrasena:'',contrasenaNueva:''
  }

  public form: FormGroup
  constructor(private actRoute:ActivatedRoute,private formBuilder: FormBuilder,  public router: Router,private http: HttpClient,public recordarservice:RecordarContraService,public alertController: AlertController) {

   }

  ngOnInit() {
    this.form=this.formBuilder.group( {
      codigo:['',[Validators.required]],
      nuevaContra:['',[Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z]).{8,}$')]]
    })
    this.recordarservice.$getObjectSource.subscribe(
      data=>{
        this.dataa=data
        //this.Usuario = data
        console.log(typeof(this.dataa))
        console.log('-------')
        console.log(JSON.parse(this.dataa))
        this.dataa= JSON.parse(this.dataa)
        console.log('Estan los datos en pagina actualizar contra',this.dataa)
      }
    )
    console.log('-----correo')
    console.log(this.dataa.correo)
    this.correoo = this.dataa.correo
    this.ContraNuevaDetails.correo = this.dataa.correo
    console.log('-----contrasena')
    console.log(this.dataa.contrasena)
    this.contrasenaa = this.dataa.contrasena
    //this.ContraNuevaDetails.contrasena = this.dataa.contrasena
    //console.log(this.dataa['correo']);
    /*
    comparar el codigo de recuperacion enviado con el contrasenaa

    BUSCAR EVENT para validar que el codigo es correcto
    */
  }

  addContra(dataBill){
    console.log('AQUIIIII')
    this.recordarservice.recordarcontra(this.ContraNuevaDetails).subscribe((data: {}) => {
      console.log('data')
      let datos=data
      console.log('Estamos en el ADD recordar dos final')
      console.log(datos)
      if(datos == 'ok' ){
        return this.router.navigate(['/inicio-sesion'])
      }else{
        console.log('no esta')
      }
    })
  }

  compararContras(event: CustomEvent){
    const codigo=event.detail.value
    console.log("codigo",codigo)
    if(this.contrasenaa != codigo){
      let alert = this.alertController.create({
        message: 'Por favor ingrese el codigo correcto',
        buttons: ['OK']}).then(alert=> alert.present());
    }


  }
  atras(){
    this.router.navigate(['/recordar-contra'])
  }



}
