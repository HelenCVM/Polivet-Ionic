import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  /*{
    path: '',
    loadChildren: () => import().then(m => m.TabsPageModule)
  }*/
  {
    path: 'paginal-inicial',
    loadChildren: () => import('./pages/paginal-inicial/paginal-inicial.module').then(m => m.PaginalInicialPageModule)
  },
  {
    path: 'inicio-sesion',
    loadChildren: () => import('./app.module').then(m => m.AppModule)
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
