import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropietarioDetalePage } from './propietario-detale.page';

const routes: Routes = [
  {
    path: '',
    component: PropietarioDetalePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropietarioDetalePageRoutingModule {}
