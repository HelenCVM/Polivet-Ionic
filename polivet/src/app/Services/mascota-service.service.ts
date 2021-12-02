import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mascota } from '../Modelo/Mascota';


@Injectable({
  providedIn: 'root'
})
export class MascotaServiceService {

  private url: string;
  private urlEspecie: string;
  constructor(public  http:HttpClient){
    this.url='/TesisVeterinaria/rest/prueba/registrarMascota'
    this.urlEspecie='http://localhost:8080/TesisVeterinaria/rest/prueba/obtenerEspecieMascota'
   }

   crearMascota(mascota:Mascota){
    console.log("serviciossss", mascota)
    const body= new HttpParams()
    .set('idPro', mascota.idPro)
    .set('nombre', mascota.nombre)
    .set('especie', mascota.especie)
    .set('raza', mascota.raza)
    .set('sexo',mascota.sexo)
    .set('fechaNac',mascota.fechaNac)
    .set('edad',mascota.edad)
    .set('coloYSenalesParti',mascota.coloYSenalesParti)

    return this.http.post(this.url, 
      body.toString(),
      {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
        responseType: 'text'

      }

    );
  }

  obtenerRaza(){
    console.log("Estamos en el service")
    return this.http.get("/TesisVeterinaria/rest/prueba/obtenerEspecieMascota")
  }
  obtenerEspecie(){
    console.log("Estamos en el service especie")
    return this.http.get("/TesisVeterinaria/rest/prueba/obtenerRazaMascota")
  }
}
