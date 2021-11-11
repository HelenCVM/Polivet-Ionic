import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Medico } from '../Modelo/Medico';

@Injectable({
  providedIn: 'root'
})
export class IniciosesionService {
  private url: string;
  constructor(private http:HttpClient) {
    this.url='http://localhost:8081/TesisVeterinaria/rest/prueba/inicio';
  }

  iniciar(usuario:Medico){
    console.log('dfkfhgdsfh-')
    console.log(usuario);

    const body = new HttpParams()
    .set('correo',usuario.correo)
    .set('contrasena',usuario.contrasena);
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
    //return this.http.post<Usuario>(this.url,usuario);
    //hecho
  }
}
