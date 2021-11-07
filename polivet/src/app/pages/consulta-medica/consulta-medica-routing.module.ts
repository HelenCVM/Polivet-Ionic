import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultaMedicaPage } from './consulta-medica.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultaMedicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultaMedicaPageRoutingModule {}
