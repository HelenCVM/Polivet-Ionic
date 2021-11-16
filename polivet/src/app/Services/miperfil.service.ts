import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MiperfilService {

  constructor(private http: HttpClient) { }

  getMedico(correopda){
    console.log(correopda)
    return this.http.get("http://localhost:8081/TesisVeterinaria/rest/prueba/medicoperfil/"+correopda);
  }

}
