import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import {LocalstoreService} from '../app/Services/localstore.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  private _localStorage: Storage;

  constructor(private localStorageRefService: LocalstoreService,private platform: Platform,private splashScreen: SplashScreen,private statusBar: StatusBar,private router: Router
  ) {
    this.initializeApp();
    this._localStorage = localStorageRefService.localStorage
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

  salir(){
    localStorage.removeItem('estado');
    localStorage.clear()
    this.router.navigate(['/inicio-sesion'])
  }
}
