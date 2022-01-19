import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { LocalstoreService } from '../app/Services/localstore.service';
import { IniciosesionService } from './Services/iniciosesion.service';
import { MiperfilService } from './Services/miperfil.service';
import { Medico } from './Modelo/Medico';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  private _localStorage: Storage;
  correo: any
  correop:any
  medico: Medico
  constructor(private localStorageRefService: LocalstoreService, private platform: Platform, private splashScreen: SplashScreen,
     private statusBar: StatusBar, private router: Router,public inicioservice:IniciosesionService,public miperfilservice: MiperfilService
  ) {
    this.initializeApp();
    this._localStorage = localStorageRefService.localStorage
  }
  ngOnInit() {
    this.inicioservice.$getObjectSource.subscribe(
      data=>{
        console.log("datos en el drawer",data)
        this.correo=data
        this.correop=this.correo.correo
        this.miperfilservice.getMedico(this.correop).subscribe((dataa=>{
          this.medico=dataa
          console.log("datos medicos en el app component",this.medico)

        }))
      })
      

  }


  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  navigate() {
    this.router.navigate(['/paginal-inicial'])
  }

  salir() {
    localStorage.removeItem('estado');
    localStorage.clear()
    this.router.navigate(['/inicio-sesion'])
  }
}
