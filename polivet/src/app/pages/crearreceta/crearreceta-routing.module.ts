import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearrecetaPage } from './crearreceta.page';

const routes: Routes = [
  {
    path: '',
    component: CrearrecetaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearrecetaPageRoutingModule {}
