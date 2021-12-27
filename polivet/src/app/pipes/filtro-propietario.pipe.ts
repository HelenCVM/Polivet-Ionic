import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPropietario'
})
export class FiltroPropietarioPipe implements PipeTransform {

  transform(arreglo: any[], texto:string, columna:string): any[] {
    if(texto==''){
      console.log("piepeeessssssss111s",arreglo)

      return arreglo;
    }

   
    texto=texto.toLocaleLowerCase();
   return arreglo.filter(item=>{
      return item.mascota_id.id_mascota_propietario.propietario.toLowerCase()
      .includes(texto)
    })
   
  }
  


}
