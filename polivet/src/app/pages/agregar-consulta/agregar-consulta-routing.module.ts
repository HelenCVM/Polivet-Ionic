import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarConsultaPage } from './agregar-consulta.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarConsultaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarConsultaPageRoutingModule {}
