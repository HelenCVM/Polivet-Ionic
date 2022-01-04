import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RazaEspeciePageRoutingModule } from './raza-especie-routing.module';

import { RazaEspeciePage } from './raza-especie.page';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RazaEspeciePageRoutingModule,
    NgxPaginationModule,

  ],
  declarations: [RazaEspeciePage]
})
export class RazaEspeciePageModule {}
