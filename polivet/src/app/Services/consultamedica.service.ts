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
  private urlConsultaByHistoria: string


  private objectSource= new BehaviorSubject<{}>({});
  $getObjectSource=this.objectSource.asObservable();
  private objectSource2= new BehaviorSubject<{}>({});
  $getObjectSource2=this.objectSource2.asObservable();


  constructor(public http: HttpClient) {
    this.url = 'https://cloudcomputing.ups.edu.ec/TesisVeterinariaApi/rest/prueba/obtenerConstantesCabecera'
    this.urlConstanteF = 'https://cloudcomputing.ups.edu.ec/TesisVeterinariaApi/rest/prueba/agregarConstanteF'
    this.urlConsultaM = 'https://cloudcomputing.ups.edu.ec/TesisVeterinariaApi/rest/prueba/registrarConsultaMedica'
    this.urlConsultaByHistoria='https://cloudcomputing.ups.edu.ec/TesisVeterinariaApi/rest/prueba/registrarConsultaMedicaByHistoria'
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

  recuperoListDeConsultasMedicas(){
    return this.http.get("https://cloudcomputing.ups.edu.ec/TesisVeterinariaApi/rest/prueba/listarHistoriaClinica")

  }

  enviandoIdHistoria(idHistoria){
    this.objectSource.next(idHistoria)
   }

   enviandoIdConsulta(idConsultaMedica){
    this.objectSource2.next(idConsultaMedica)
   }

   recuperoListHistoria(idConsulta){
    console.log('estamos recuperoListDeConsultasMedicasDetalle',idConsulta)
    return this.http.get("https://cloudcomputing.ups.edu.ec/TesisVeterinariaApi/rest/prueba/listarConsultaMedica/"+idConsulta)

  }

  consultamedicaByHistoria(idConsulta){
    return this.http.get("https://cloudcomputing.ups.edu.ec/TesisVeterinariaApi/rest/prueba/listarConsultaMedicaByIdHistoria/"+idConsulta)

  }
  detalleByConstanteDet(idConsulta){
    return this.http.get("https://cloudcomputing.ups.edu.ec/TesisVeterinariaApi/rest/prueba/listarConstantesFisioByConsulta/"+idConsulta)

  }
  obtenerConsultaById(idConsulta){
    return this.http.get("https://cloudcomputing.ups.edu.ec/TesisVeterinariaApi/rest/prueba/listarConsultaById/"+idConsulta)
  }

  listaConsultaOk(idConsulta){
    return this.http.get("https://cloudcomputing.ups.edu.ec/TesisVeterinariaApi/rest/prueba/listarConsultaok/"+idConsulta, {responseType: 'text'})
  }


  crearConsultaMByHistoria(consultaM:ConsultaMedica){
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
    return this.http.post(this.urlConsultaByHistoria,
      body.toString(),
      {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
        responseType: 'text'

      }

    );
  }
}
