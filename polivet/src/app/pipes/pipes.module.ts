import { NgModule } from '@angular/core';
import { FiltroPropietarioPipe } from './filtro-propietario.pipe';

@NgModule({
  declarations: [FiltroPropietarioPipe],
  exports: [FiltroPropietarioPipe]

})
export class PipesModule { }
