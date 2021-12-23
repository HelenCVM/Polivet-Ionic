import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroListPropietario'
})
export class FiltroListPropietarioPipe implements PipeTransform {


  transform(arreglo: any[], texto:string, columna:string): any[] {
    if(texto==''){
      return arreglo;
    }

   
    texto=texto.toLocaleLowerCase();
   return arreglo.filter(item=>{
      return item.propietario.toLowerCase()
      .includes(texto)
    })
   
  }
}
