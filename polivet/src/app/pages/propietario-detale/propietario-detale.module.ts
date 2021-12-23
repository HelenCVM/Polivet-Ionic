import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PropietarioDetalePageRoutingModule } from './propietario-detale-routing.module';

import { PropietarioDetalePage } from './propietario-detale.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PropietarioDetalePageRoutingModule
  ],
  declarations: [PropietarioDetalePage]
})
export class PropietarioDetalePageModule {}
