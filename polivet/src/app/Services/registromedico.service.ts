import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Medico } from '../Modelo/Medico';

@Injectable({
  providedIn: 'root'
})
export class RegistromedicoService {
  private url: string;
  private urll: string;

  constructor(public  http:HttpClient) {
    this.url='/TesisVeterinaria/rest/prueba/registrarPUsuario'
    this.urll='/TesisVeterinaria/rest/prueba/actualizarPMedico'
   }

  obtenerEspecialidad(){
    console.log("Estamos en el service especialidad")
    return this.http.get("/TesisVeterinaria/rest/prueba/obtenerEspecialidad")
  }

  crearUsuario(medico:Medico){
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

  actualizarMedico(medico:Medico){
    const body= new HttpParams()
    .set('cedula', medico.cedula)
    .set('nombres', medico.nombres)
    .set('apellidos', medico.apellidos)
    .set('direccion', medico.direccion)
    .set('fechaNac', medico.fechaNac)
    .set('correo', medico.correo)
    .set('celular', medico.celular)
    .set('titulo', medico.titulo)
    .set('especialidad_id', medico.especialidad_id)
    .set('usuario_id',medico.usuario_id)

    return this.http.post(this.urll,
      body.toString(),
      {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
        responseType: 'text'

      }

    );
  }

}
