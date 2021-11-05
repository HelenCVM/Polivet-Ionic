import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginalInicialPageRoutingModule } from './paginal-inicial-routing.module';

import { PaginalInicialPage } from './paginal-inicial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginalInicialPageRoutingModule
  ],
  declarations: [PaginalInicialPage]
})
export class PaginalInicialPageModule {}
