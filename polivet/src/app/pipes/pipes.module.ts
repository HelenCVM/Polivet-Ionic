import { NgModule } from '@angular/core';
import { FiltroPropietarioPipe } from './filtro-propietario.pipe';
import { FiltroListPropietarioPipe } from './filtro-list-propietario.pipe';

@NgModule({
  declarations: [FiltroPropietarioPipe, FiltroListPropietarioPipe],
  exports: [FiltroPropietarioPipe,FiltroListPropietarioPipe]

})
export class PipesModule { }
