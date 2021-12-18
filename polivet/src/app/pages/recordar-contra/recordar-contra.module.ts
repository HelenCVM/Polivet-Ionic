import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecordarContraPageRoutingModule } from './recordar-contra-routing.module';

import { RecordarContraPage } from './recordar-contra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecordarContraPageRoutingModule
  ],
  declarations: [RecordarContraPage]
})
export class RecordarContraPageModule {}
