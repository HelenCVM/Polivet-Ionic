import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mascota } from '../Modelo/Mascota';


@Injectable({
  providedIn: 'root'
})
export class MascotaServiceService {

  private url: string;
  constructor(public  http:HttpClient){
    this.url='http://localhost:8080/TesisVeterinaria/rest/prueba/registrarMascota'

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
