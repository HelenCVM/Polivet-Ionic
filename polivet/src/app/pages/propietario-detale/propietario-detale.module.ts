import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PropietarioDetalePageRoutingModule } from './propietario-detale-routing.module';

import { PropietarioDetalePage } from './propietario-detale.page';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PropietarioDetalePageRoutingModule,
    NgxPaginationModule,

  ],
  declarations: [PropietarioDetalePage]
})
export class PropietarioDetalePageModule {}
