import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoriasClinicasPageRoutingModule } from './historias-clinicas-routing.module';

import { HistoriasClinicasPage } from './historias-clinicas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoriasClinicasPageRoutingModule
  ],
  declarations: [HistoriasClinicasPage]
})
export class HistoriasClinicasPageModule {}
