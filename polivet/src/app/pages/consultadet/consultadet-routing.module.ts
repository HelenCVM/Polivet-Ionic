import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultadetPage } from './consultadet.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultadetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultadetPageRoutingModule {}
