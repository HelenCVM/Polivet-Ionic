import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginalInicialPage } from './paginal-inicial.page';

const routes: Routes = [
  {
    path: '',
    component: PaginalInicialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginalInicialPageRoutingModule {}
