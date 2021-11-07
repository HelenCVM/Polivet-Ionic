import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuDrawerPageRoutingModule } from './menu-drawer-routing.module';

import { MenuDrawerPage } from './menu-drawer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuDrawerPageRoutingModule
  ],
  declarations: [MenuDrawerPage]
})
export class MenuDrawerPageModule {}
