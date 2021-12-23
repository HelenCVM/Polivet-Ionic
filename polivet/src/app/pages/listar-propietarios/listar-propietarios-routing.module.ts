import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarPropietariosPage } from './listar-propietarios.page';

const routes: Routes = [
  {
    path: '',
    component: ListarPropietariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarPropietariosPageRoutingModule {}
