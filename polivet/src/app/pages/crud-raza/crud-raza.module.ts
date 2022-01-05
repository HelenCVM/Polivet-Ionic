import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudRazaPageRoutingModule } from './crud-raza-routing.module';

import { CrudRazaPage } from './crud-raza.page';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudRazaPageRoutingModule,
    NgxPaginationModule,

  ],
  declarations: [CrudRazaPage]
})
export class CrudRazaPageModule {}
