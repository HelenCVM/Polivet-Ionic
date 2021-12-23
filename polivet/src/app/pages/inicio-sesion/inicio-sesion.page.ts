import { Component, OnInit,Input} from '@angular/core';
import { Router } from '@angular/router';
import {Medico} from 'src/app/Modelo/Medico';
import {IniciosesionService} from '../../Services/iniciosesion.service';
import { MiperfilService } from 'src/app/Services/miperfil.service';
import { NavController } from '@ionic/angular';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})
export class InicioSesionPage implements OnInit {
 usuario: Medico
 datajson:any
 correo:any
 rol:any

 @Input() InicioDetails = {
  correo:'', contrasena:''
}

constructor(public navCtrl: NavController,public router: Router,public inicioservice:IniciosesionService, public miperfilservice: MiperfilService ) { }

  ngOnInit(): void{

  }



  addInicio(dataBill) {
    console.log('Addinicio')
    this.inicioservice.iniciar(this.InicioDetails).subscribe((data: {}) => {
      console.log('data')
      let correop=data
      console.log('Estamos en el ADDINICIOSESION')
      console.log(correop)
      this.datajson = data
        this.datajson = JSON.parse(this.datajson);
        console.log('inicio datajson',this.datajson)
        console.log('inicio de sesion realizado')
        this.correo = this.datajson.correo
        this.rol = this.datajson.rol_id.descripcion
        console.log('--rol',this.rol)
        console.log('--correo',this.correo)
        let corr=this.correo
        let rol= this.rol
        console.log('---correo',corr)
      if(correop =='No creado'){
        return this.router.navigate(['/inicio-sesion'])
      }else{

        this.inicioservice.enviandocorreo(this.datajson)
        //this.miperfilservice.enviandodatos(rol)
        return this.router.navigate(['/paginal-inicial'])
        //enviandodatos
        //this.inicioservice.enviandocorreo(correop)
        //return this.router.navigate(['/paginal-inicial'])

      }

    })
  }

}
