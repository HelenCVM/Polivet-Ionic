import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuDrawerPage } from './menu-drawer.page';

const routes: Routes = [
  {
    path: '',
    component: MenuDrawerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuDrawerPageRoutingModule {}
