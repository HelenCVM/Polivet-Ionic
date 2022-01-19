import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Medico } from '../Modelo/Medico';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IniciosesionService {
  private url: string;
  constructor(private http:HttpClient) {
    this.url='/TesisVeterinaria/rest/prueba/inicio';
  }
  private objectSource= new BehaviorSubject<{}>({});
  $getObjectSource=this.objectSource.asObservable();


  private objectSourcee= new BehaviorSubject<{}>({});
  $getObjectSourcee=this.objectSource.asObservable();


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

  enviandocorreo(correo){
   this.objectSource.next(correo)
  }

  enviandodatos(datos){
    this.objectSourcee.next(datos)
  }

  getMedico(idusuario){
    console.log(idusuario)
    return this.http.get("/TesisVeterinaria/rest/prueba/obtenerMedicoByCorreo/"+idusuario);
  }
}
