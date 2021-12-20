import { NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoriasClinicasPageRoutingModule } from './historias-clinicas-routing.module';

import { HistoriasClinicasPage } from './historias-clinicas.page';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoriasClinicasPageRoutingModule,
    PipesModule,
  ],
  declarations: [HistoriasClinicasPage]
})
export class HistoriasClinicasPageModule {}
