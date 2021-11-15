import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Propietario } from '../Modelo/Propietario';

@Injectable({
  providedIn: 'root'
})
export class PropietarioServiceService {

  private url: string;
  constructor(public  http:HttpClient) { 
    this.url='http://localhost:8080/TesisVeterinaria/rest/prueba/registrarPropietario'


  }
  crearPropietario(propietario:Propietario){
    console.log("serviciossss", propietario)
    const body= new HttpParams()
    .set('cedula', propietario.idPropietario)
    .set('nombrepropietario', propietario.nombrePropietario)
    .set('ciudad', propietario.ciudad)
    .set('direccion', propietario.direccion)
    .set('telefono',propietario.telefono)
    .set('correo',propietario.correo)
    return this.http.post(
      this.url, 
      body.toString(),
      {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
        responseType: 'text'

      }

    );
  }
}
