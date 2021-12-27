import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroById'
})
export class FiltroByIdPipe implements PipeTransform {

  transform(arreglo: any[], texto: string, columna: string): any[] {
    if (texto == '') {
      console.log("piepeeessssssss2222s", arreglo)
      
      return arreglo;
    }


    texto = texto?.toLocaleLowerCase();
    return arreglo.filter(item => {
      return item[columna]?.toLowerCase()
        .includes(texto)
    })
  }
}
