import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import {RecetaMedica} from '../Modelo/RecetaMedica';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {
  private url: string;

  private objectSource= new BehaviorSubject<{}>({});
  $getObjectSource=this.objectSource.asObservable();

  constructor(public http: HttpClient) {
 this.url='/TesisVeterinaria/rest/prueba/registrarRecetaM'
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


}
