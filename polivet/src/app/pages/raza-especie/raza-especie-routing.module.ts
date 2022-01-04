import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RazaEspeciePage } from './raza-especie.page';

const routes: Routes = [
  {
    path: '',
    component: RazaEspeciePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RazaEspeciePageRoutingModule {}
