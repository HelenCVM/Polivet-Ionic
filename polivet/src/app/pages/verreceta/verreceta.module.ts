import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerrecetaPageRoutingModule } from './verreceta-routing.module';

import { VerrecetaPage } from './verreceta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerrecetaPageRoutingModule
  ],
  declarations: [VerrecetaPage]
})
export class VerrecetaPageModule {}
