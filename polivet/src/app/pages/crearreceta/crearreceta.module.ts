import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearrecetaPageRoutingModule } from './crearreceta-routing.module';

import { CrearrecetaPage } from './crearreceta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearrecetaPageRoutingModule
  ],
  declarations: [CrearrecetaPage]
})
export class CrearrecetaPageModule {}
