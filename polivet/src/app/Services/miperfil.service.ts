import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MiperfilService {

  constructor(private http: HttpClient) { }

  private objectSource= new BehaviorSubject<{}>({});
  $getObjectSource=this.objectSource.asObservable();



  getMedico(correopda){
    console.log(correopda)
    return this.http.get("https://cloudcomputing.ups.edu.ec/TesisVeterinariaApi/rest/prueba/medicoperfilcorreo/"+correopda);
  }

  enviandocorreo(correo){
    this.objectSource.next(correo)
   }

   /*
   enviandodatos(rol){
    this.objectSourcee.next(rol)
   }

*/


}
