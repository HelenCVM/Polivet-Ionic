import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarPropietariosPageRoutingModule } from './listar-propietarios-routing.module';

import { ListarPropietariosPage } from './listar-propietarios.page';
import {NgxPaginationModule} from 'ngx-pagination';
import { PipesModule } from 'src/app/pipes/pipes.module';
//import { FiltroByIdPipe } from 'src/app/pipe/filtro-by-id.pipe';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarPropietariosPageRoutingModule,
    PipesModule,
    NgxPaginationModule,


  ],
  declarations: [ListarPropietariosPage]
})
export class ListarPropietariosPageModule {}
