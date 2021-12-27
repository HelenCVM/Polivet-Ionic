import { NgModule } from '@angular/core';
import { FiltroByIdPipe } from './filtro-by-id.pipe';

@NgModule({
  declarations: [FiltroByIdPipe],
  exports: [FiltroByIdPipe]
})
export class PipeModule { }
