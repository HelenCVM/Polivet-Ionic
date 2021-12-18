import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecordarContraPage } from './recordar-contra.page';

const routes: Routes = [
  {
    path: '',
    component: RecordarContraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecordarContraPageRoutingModule {}
