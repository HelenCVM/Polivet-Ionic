import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Medico } from '../Modelo/Medico';

@Injectable({
  providedIn: 'root'
})
export class RegistromedicoService {
  private url: string;

  constructor(public  http:HttpClient) {
    this.url='http://localhost:8081/TesisVeterinaria/rest/prueba/registrarPUsuario'
   }

  obtenerEspecialidad(){
    console.log("Estamos en el service especialidad")
    return this.http.get("http://localhost:8081/TesisVeterinaria/rest/prueba/obtenerEspecialidad")
  }

  crearUsuario(medico:Medico){
    console.log("----", medico)
    const body= new HttpParams()
    .set('cedula', medico.cedula)
    .set('nombres', medico.nombres)
    .set('apellidos', medico.apellidos)
    .set('direccion', medico.direccion)
    .set('fechaNac', medico.fechaNac)
    .set('correo', medico.correo)
    .set('contrasena', medico.contrasena)
    .set('celular', medico.celular)
    .set('titulo', medico.titulo)
    .set('especialidad_id', medico.especialidad_id)

    return this.http.post(this.url,
      body.toString(),
      {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
        responseType: 'text'

      }

    );
  }

}
