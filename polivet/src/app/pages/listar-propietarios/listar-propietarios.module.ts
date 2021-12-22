import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarPropietariosPageRoutingModule } from './listar-propietarios-routing.module';

import { ListarPropietariosPage } from './listar-propietarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarPropietariosPageRoutingModule
  ],
  declarations: [ListarPropietariosPage]
})
export class ListarPropietariosPageModule {}
