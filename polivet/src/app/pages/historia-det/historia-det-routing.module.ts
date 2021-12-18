import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoriaDetPage } from './historia-det.page';

const routes: Routes = [
  {
    path: '',
    component: HistoriaDetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoriaDetPageRoutingModule {}
