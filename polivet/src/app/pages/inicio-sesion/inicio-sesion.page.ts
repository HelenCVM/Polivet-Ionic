import { Component, OnInit,Input} from '@angular/core';
import { Router } from '@angular/router';
import {Medico} from 'src/app/Modelo/Medico';
import {IniciosesionService} from '../../Services/iniciosesion.service';
import {LocalstoreService} from '../../Services/localstore.service';
import { MiperfilService } from 'src/app/Services/miperfil.service';
import { NavController } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { AlertController } from '@ionic/angular';
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
 estado: boolean = false
 correoo:any
 private _localStorage: Storage;

 @Input() InicioDetails = {
  correo:'', contrasena:''
}

constructor(private _localStorageRefService: LocalstoreService,public navCtrl: NavController,public router: Router,public inicioservice:IniciosesionService, public miperfilservice: MiperfilService, public alertController: AlertController) {
  this._localStorage = _localStorageRefService.localStorage
 }

  ngOnInit(): void{

  }



  addInicio(dataBill) {
    console.log('Addinicio')
    this.inicioservice.iniciar(this.InicioDetails).subscribe((data: {}) => {
      console.log('data')
      let correop=data
      this.correoo = data
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

      if(this.correoo =='No creado'){

        console.log('no creadoooo')
        //return this.router.navigate(['/inicio-sesion'])
      }else{
        //localStorage.setItem('usuario', JSON.stringify(this.user));
        this._localStorage.setItem('estado',JSON.stringify(this.correo));
        this.inicioservice.enviandocorreo(this.datajson)
        //this.miperfilservice.enviandodatos(rol)
        return this.router.navigate(['/paginal-inicial'])
        //enviandodatos
        //this.inicioservice.enviandocorreo(correop)
        //return this.router.navigate(['/paginal-inicial'])

      }

    })
  }

  doAlert(){
    if(this.estado  == true){
      let alert = this.alertController.create({
        message: 'Por favor ingrese el correo correcto',
        buttons: ['OK']}).then(alert=> alert.present());
    }
  }

  async showAlert() {
    if(this.estado == true)
    {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'SubTitle',
      message: 'This is an alert message',
      buttons: ['OK']
    });
    await alert.present();
    const result = await alert.onDidDismiss();
    console.log(result);
  }
}

}
