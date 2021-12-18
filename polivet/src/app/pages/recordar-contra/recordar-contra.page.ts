import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import {Medico} from 'src/app/Modelo/Medico';
import {RecordarContraService} from '../../Services/recordar-contra.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recordar-contra',
  templateUrl: './recordar-contra.page.html',
  styleUrls: ['./recordar-contra.page.scss'],
})
export class RecordarContraPage implements OnInit {

  usuario:Medico
  datore:any

  @Input() RecordarDetails = {
    correo:''
  }
  constructor(public router: Router,public recordarservice:RecordarContraService,public alertController: AlertController) { }

  ngOnInit() {
  }

   addRecordar(dataBill){
    console.log('add recordar')
    this.recordarservice.recordar(this.RecordarDetails).subscribe((data: {}) => {
      console.log('data')
      let datos=data
      this.datore = data
      console.log('Estamos en el ADD recordar')
      console.log(datos)
      //actualizar-contrasena
      this.recordarservice.enviandodatos(this.datore )
      return this.router.navigate(['/actualizar-contrasena'])
    })
  }

  doAlert(){
  if(this.datore  == 'No creado'){
    let alert = this.alertController.create({
      message: 'Por favor ingrese el correo correcto',
      buttons: ['OK']}).then(alert=> alert.present());
  }

}




}

