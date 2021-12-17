import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoriaDetPageRoutingModule } from './historia-det-routing.module';

import { HistoriaDetPage } from './historia-det.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoriaDetPageRoutingModule
  ],
  declarations: [HistoriaDetPage]
})
export class HistoriaDetPageModule {}
