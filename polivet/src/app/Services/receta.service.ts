import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import {RecetaMedica} from '../Modelo/RecetaMedica';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {
  private url: string;
  private urlActualiza: string;

  private objectSource= new BehaviorSubject<{}>({});
  $getObjectSource=this.objectSource.asObservable();

  constructor(public http: HttpClient) {
 this.url='/TesisVeterinaria/rest/prueba/registrarRecetaM'
 this.urlActualiza='/TesisVeterinaria/rest/prueba/actualizaRecetaM'
  }

  enviandoIdConsulta(idConsultaMedica){
    this.objectSource.next(idConsultaMedica)
   }

   crearReceta(receta:RecetaMedica){
    const body= new HttpParams()
    .set('rp', receta.rp)
    .set('prescripcion', receta.prescripcion)
    .set('consulta_id', receta.consulta_id)

    return this.http.post(this.url,
      body.toString(),
      {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
        responseType: 'text'

      }

    );
   }

   listrecetaMedica(idConsulta){
    return this.http.get("/TesisVeterinaria/rest/prueba/listasRecetaMedica/"+idConsulta)

  }

  listadetalleReceta(idReceta){
    return this.http.get("/TesisVeterinaria/rest/prueba/listaDetalleRecetaM/"+idReceta)

  }

  eliminarlReceta(idReceta){
    return this.http.get("/TesisVeterinaria/rest/prueba/EliminarRecetaM/"+idReceta,{responseType: 'text'})
  }

  actualizarReceta(receta:RecetaMedica){
    const body= new HttpParams()
    .set('idReceta',receta.idReceta)
    .set('rp', receta.rp)
    .set('prescripcion', receta.prescripcion)
    .set('consulta_id', receta.consulta_id)

    return this.http.post(this.urlActualiza,
      body.toString(),
      {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
        responseType: 'text'

      }

    );
  }

}
