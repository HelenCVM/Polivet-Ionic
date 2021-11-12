import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Propietario } from '../Modelo/Propietario';

@Injectable({
  providedIn: 'root'
})
export class PropietarioServiceService {

  
  constructor(public  http:HttpClient) { }
  crearPropietario(propietario:Propietario){
    console.log("serviciossss", propietario)



  }
}
