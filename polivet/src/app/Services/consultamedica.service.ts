import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ConsultaMedica } from '../Modelo/ConsultaMedica';

@Injectable({
  providedIn: 'root'
})
export class ConsultamedicaService {

  private url: string
  private urlConstanteF: string
  private urlConsultaM: string
  private urlidConsulta:string

  private objectSource= new BehaviorSubject<{}>({});
  $getObjectSource=this.objectSource.asObservable();

  constructor(public http: HttpClient) {
    this.url = '/TesisVeterinaria/rest/prueba/obtenerConstantesCabecera'
    this.urlConstanteF = '/TesisVeterinaria/rest/prueba/agregarConstanteF'
    this.urlConsultaM = '/TesisVeterinaria/rest/prueba/registrarConsultaMedica'
    this.urlidConsulta = '/TesisVeterinaria/rest/prueba/recuIdConsulta'
  }

  obtenerConstantesCab() {
    console.log("Estamos en constantes Cab")
    return this.http.get(this.url)
  }



  crearConstantesF(listaconsutal) {
    console.log('llegaa al servicios', listaconsutal)
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify(
      listaconsutal
    );
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
    };
    fetch(this.urlConstanteF, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

  }

  crearConsultaM(consultaM:ConsultaMedica){
    console.log("consultaM", consultaM)
    const body= new HttpParams()
    .set('motivoConsulta',consultaM.motivoConsulta)
    .set('vacunacion', consultaM.vacunacion)
    .set('desparacitacion', consultaM.desparacitacion)
    .set('estadoR', consultaM.estadoR)
    .set('producto',consultaM.producto)
    .set('fecha',consultaM.fecha)
    .set('procedencia',consultaM.procedencia)
    .set('anamnesis',consultaM.anamnesis)
    .set('diagnostico',consultaM.diagnostico)
    .set('pronostico',consultaM.pronostico)
    .set('tratamiento',consultaM.tratamiento)
    .set('observaciones',consultaM.observaciones)
    .set('idMascota',consultaM.idMascota)
    .set('medico',consultaM.medico)    

    return this.http.post(this.urlConsultaM, 
      body.toString(),
      {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
        responseType: 'text'

      }

    );
  }
  pasarIdConsulta(idconsulta){
    console.log('desde pasarIdConsulta',idconsulta)
    const body= new HttpParams()
    .set('idconsulta',idconsulta)   

    return this.http.post(this.urlidConsulta, 
      body.toString(),
      {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
        responseType: 'text'

      }

    );
  }

  recuperoListDeConsultasMedicas(){
    return this.http.get("/TesisVeterinaria/rest/prueba/listarHistoriaClinica")

  }

  enviandoIdHistoria(idHistoria){
    this.objectSource.next(idHistoria)
   }

   recuperoListHistoria(idConsulta){
    console.log('estamos recuperoListDeConsultasMedicasDetalle',idConsulta)
    return this.http.get("/TesisVeterinaria/rest/prueba/listarConsultaMedica/"+idConsulta)

  }

  consultamedicaByHistoria(idConsulta){
    return this.http.get("/TesisVeterinaria/rest/prueba/listarConsultaMedicaByIdHistoria/"+idConsulta)

  }
}
