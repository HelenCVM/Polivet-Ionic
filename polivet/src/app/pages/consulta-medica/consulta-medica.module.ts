import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultaMedicaPageRoutingModule } from './consulta-medica-routing.module';

import { ConsultaMedicaPage } from './consulta-medica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultaMedicaPageRoutingModule
  ],
  declarations: [ConsultaMedicaPage]
})
export class ConsultaMedicaPageModule {}
