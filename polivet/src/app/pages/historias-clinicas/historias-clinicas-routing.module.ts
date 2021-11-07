import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoriasClinicasPage } from './historias-clinicas.page';

const routes: Routes = [
  {
    path: '',
    component: HistoriasClinicasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoriasClinicasPageRoutingModule {}
