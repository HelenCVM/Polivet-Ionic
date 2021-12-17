import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultadetPageRoutingModule } from './consultadet-routing.module';

import { ConsultadetPage } from './consultadet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultadetPageRoutingModule
  ],
  declarations: [ConsultadetPage]
})
export class ConsultadetPageModule {}
