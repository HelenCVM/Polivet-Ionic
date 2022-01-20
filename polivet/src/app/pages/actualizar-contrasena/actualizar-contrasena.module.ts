import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualizarContrasenaPageRoutingModule } from './actualizar-contrasena-routing.module';

import { ActualizarContrasenaPage } from './actualizar-contrasena.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ActualizarContrasenaPageRoutingModule
  ],
  declarations: [ActualizarContrasenaPage]
})
export class ActualizarContrasenaPageModule {}
