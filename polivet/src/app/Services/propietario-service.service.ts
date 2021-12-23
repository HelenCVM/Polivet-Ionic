import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Propietario } from '../Modelo/Propietario';

@Injectable({
  providedIn: 'root'
})
export class PropietarioServiceService {

  private url: string;
  private objectSource= new BehaviorSubject<{}>({});
  $getObjectSource=this.objectSource.asObservable();

  constructor(public  http:HttpClient) { 
    this.url='/TesisVeterinaria/rest/prueba/registrarPropietario'


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

  listarPropietarios(){
    console.log("Estamos en el listar propietarios especie")
    return this.http.get("/TesisVeterinaria/rest/prueba/listarPropietario")
  }
  enviarIdPropietario(idPropietario)
{
  this.objectSource.next(idPropietario)

}
listarPropietarioById(idPropietario){
  console.log("Estamos en el listar propietario by Id")
  return this.http.get("/TesisVeterinaria/rest/prueba/PropietariobyId/"+idPropietario)
}
}
