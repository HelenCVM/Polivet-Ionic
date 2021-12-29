import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerrecetaPage } from './verreceta.page';

const routes: Routes = [
  {
    path: '',
    component: VerrecetaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerrecetaPageRoutingModule {}
