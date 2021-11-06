import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  /*{
    path: '',
    loadChildren: () => import().then(m => m.TabsPageModule)
  }*/
  {
    path: 'inicio-sesion',
    component: AppComponent
  },
  {
    path: 'paginal-inicial',
    loadChildren: () => import('./pages/paginal-inicial/paginal-inicial.module').then(m => m.PaginalInicialPageModule)
  },
  {
    path: '',
    redirectTo: 'inicio-sesion',
    pathMatch: 'full'
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
