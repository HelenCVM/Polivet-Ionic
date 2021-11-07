import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecetaMedicaPage } from './receta-medica.page';

const routes: Routes = [
  {
    path: '',
    component: RecetaMedicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecetaMedicaPageRoutingModule {}
