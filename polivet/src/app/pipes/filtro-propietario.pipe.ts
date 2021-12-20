import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPropietario'
})
export class FiltroPropietarioPipe implements PipeTransform {

  transform(arreglo: any[], texto:string): any[] {
    if(texto==''){
      return arreglo;
    }
   return arreglo.filter(item=>{
      return item.mascota_id.id_mascota_propietario.propietario.toLowerCase()
      .includes(texto)
    })
  }

}
