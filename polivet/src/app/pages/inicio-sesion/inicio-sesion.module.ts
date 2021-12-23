import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InicioSesionPageRoutingModule } from './inicio-sesion-routing.module';
import { InicioSesionPage } from './inicio-sesion.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    IonicModule,
    InicioSesionPageRoutingModule
  ],
  declarations: [InicioSesionPage]
})
export class InicioSesionPageModule {}
