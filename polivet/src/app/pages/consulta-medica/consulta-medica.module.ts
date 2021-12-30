import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultaMedicaPageRoutingModule } from './consulta-medica-routing.module';

import { ConsultaMedicaPage } from './consulta-medica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultaMedicaPageRoutingModule, 
    ReactiveFormsModule
  ],
  declarations: [ConsultaMedicaPage]
})
export class ConsultaMedicaPageModule {}
