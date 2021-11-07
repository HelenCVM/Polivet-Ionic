import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecetaMedicaPageRoutingModule } from './receta-medica-routing.module';

import { RecetaMedicaPage } from './receta-medica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecetaMedicaPageRoutingModule
  ],
  declarations: [RecetaMedicaPage]
})
export class RecetaMedicaPageModule {}
