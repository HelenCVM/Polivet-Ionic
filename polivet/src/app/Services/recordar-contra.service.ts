import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Medico } from '../Modelo/Medico';
import {Usuario} from '../Modelo/Usuario';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecordarContraService {
  private url: string;
  private urll:string

  constructor(private http:HttpClient) {
    this.url='/TesisVeterinaria/rest/prueba/recordarcontra';
    this.urll='/TesisVeterinaria/rest/prueba/recordarcontrados';
  }

  private objectSource= new BehaviorSubject<{}>({});
  $getObjectSource=this.objectSource.asObservable();

  recordar(usuario:Medico){
    console.log('dfkfhgdsfh-')
    console.log(usuario);

    const body = new HttpParams()
    .set('correo',usuario.correo)
    console.log('dfkfhgdsfh--')
    console.log(this.url)
    return this.http.post(
      this.url,
      body.toString(),
      {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
        responseType: 'text'
      }
    );
}

enviandodatos(datos){
  this.objectSource.next(datos)
 }

 recordarcontra(usuario:Usuario){
  console.log('dfkfhgdsfh-')
  console.log(usuario);

  const body = new HttpParams()
  .set('correo',usuario.correo)
  .set('contrasena',usuario.contrasena)
  .set('contrasenaNueva',usuario.contrasenaNueva)

  console.log('dfkfhgdsfh--')
  console.log(this.urll)
  return this.http.post(
    this.urll,
    body.toString(),
    {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
      responseType: 'text'
    }
  );
}

}
