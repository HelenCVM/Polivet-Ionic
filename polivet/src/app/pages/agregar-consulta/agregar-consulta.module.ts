import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarConsultaPageRoutingModule } from './agregar-consulta-routing.module';

import { AgregarConsultaPage } from './agregar-consulta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarConsultaPageRoutingModule,
    ReactiveFormsModule

  ],
  declarations: [AgregarConsultaPage]
})
export class AgregarConsultaPageModule {}
