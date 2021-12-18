import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo:'inicio-sesion',
    pathMatch: 'full'
  },
  {
    path: 'inicio-sesion',
    loadChildren: () => import('./pages/inicio-sesion/inicio-sesion.module').then(m => m.InicioSesionPageModule)
  },
  {

    path: 'paginal-inicial',
    loadChildren: () => import('./pages/paginal-inicial/paginal-inicial.module').then(m => m.PaginalInicialPageModule)
  },
  {
    path: 'menu-drawer',
    loadChildren: () => import('./pages/menu-drawer/menu-drawer.module').then( m => m.MenuDrawerPageModule)
  },
  {
    path: 'mi-perfil',
    loadChildren: () => import('./pages/mi-perfil/mi-perfil.module').then( m => m.MiPerfilPageModule)
  },
  {
    path: 'historias-clinicas',
    loadChildren: () => import('./pages/historias-clinicas/historias-clinicas.module').then( m => m.HistoriasClinicasPageModule)
  },
  {
    path: 'propietario',
    loadChildren: () => import('./pages/propietario/propietario.module').then( m => m.PropietarioPageModule)
  },
  {
    path: 'mascota/:idPropietario',
    loadChildren: () => import('./pages/mascota/mascota.module').then( m => m.MascotaPageModule)
  },
  {
    path: 'receta-medica',
    loadChildren: () => import('./pages/receta-medica/receta-medica.module').then( m => m.RecetaMedicaPageModule)
  },
  {
    path: 'consulta-medica/:idMascota',
    loadChildren: () => import('./pages/consulta-medica/consulta-medica.module').then( m => m.ConsultaMedicaPageModule)
  },
  {
    path: 'registro-medico',
    loadChildren: () => import('./pages/registro-medico/registro-medico.module').then( m => m.RegistroMedicoPageModule)
  },
  {
    path: 'recordar-contra',
    loadChildren: () => import('./pages/recordar-contra/recordar-contra.module').then( m => m.RecordarContraPageModule)
  },
  {
    path: 'actualizar-contrasena',
    loadChildren: () => import('./pages/actualizar-contrasena/actualizar-contrasena.module').then( m => m.ActualizarContrasenaPageModule)
  },






];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
