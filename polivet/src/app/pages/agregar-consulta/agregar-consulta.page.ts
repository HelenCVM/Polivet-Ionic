import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConstantesFiosologicas } from 'src/app/Modelo/ConstantesFisiologicas';
import { ConsultamedicaService } from 'src/app/Services/consultamedica.service';
import { IniciosesionService } from '../../Services/iniciosesion.service';

@Component({
  selector: 'app-agregar-consulta',
  templateUrl: './agregar-consulta.page.html',
  styleUrls: ['./agregar-consulta.page.scss'],
})
export class AgregarConsultaPage implements OnInit {
  idMascota: any
  constatesCabList: any = []
  opcionAsa: any
  opcionEstadoMental: any
  opcionEstadoFisico: any
  opcionVacunacion: any
  opcionDesparacitacion: any
  opcionEstadoReproductivo: any
  opcionProcedencia: any
  opcionFechaVacuna: any
  element: any
  peso: string
  t: string
  FCard: string
  FResp: string
  mucosas: string
  pulso: string
  otras: string
  turgenciapiel: string
  idHistoria: any
  idConsultaMedica: any
  public constantesFisioCab: any = [];
  @Input() InicioDetails = {
    motivoConsulta: '', vacunacion: '', desparacitacion: '', estadoR: '', producto: '', fecha: '',
    procedencia: '', anamnesis: '', diagnostico: '',
    pronostico: '', tratamiento: '', observaciones: '', idMascota: '' }

  constructor(public inicioservice: IniciosesionService, public router: Router, private consultaMedicaService: ConsultamedicaService) { 

    this.obtenerConstantesCab();
  }

  ngOnInit() {
    this.consultaMedicaService.$getObjectSource.subscribe(
      data => {
        this.idHistoria = data
        console.log('reciboo id de historia', this.idHistoria)
      }
    )
  }

  obtenerConstantesCab() {
    this.consultaMedicaService.obtenerConstantesCab().subscribe((data) => {
      this.constatesCabList = data
      console.log(data)
    })
   
  }


  guardarASA(event: CustomEvent) {
    this.opcionAsa = event.detail.value
    console.log('ASA', this.opcionAsa)
  }

  guardarEstadoF(event: CustomEvent) {
    this.opcionEstadoFisico = event.detail.value
    console.log('Estado Fisico', this.opcionEstadoFisico)
  }
  guardarEstadoM(event: CustomEvent) {
    this.opcionEstadoMental = event.detail.value
    console.log('Estado Mental', this.opcionEstadoMental)
  }
  guardarVacunacion(event: CustomEvent) {
    this.opcionVacunacion = event.detail.value
    console.log('Vacunacion', this.opcionVacunacion)
  }
  guardarDesparasitacion(event: CustomEvent) {
    this.opcionDesparacitacion = event.detail.value
    console.log('Desparacitacion', this.opcionDesparacitacion)
  }

  guardarEstadoR(event: CustomEvent) {
    this.opcionEstadoReproductivo = event.detail.value
    console.log('Respoductivo', this.opcionEstadoReproductivo)
  }
  guardarProcedencia(event: CustomEvent) {
    this.opcionProcedencia = event.detail.value
    console.log('Procedencia', this.opcionProcedencia)
  }
  guardarFechasV(event: CustomEvent) {
    this.opcionFechaVacuna = event.detail.value
    this.opcionFechaVacuna = this.opcionFechaVacuna.split('T')[0];
    console.log(this.opcionFechaVacuna)


  }
  cancelar() {
    this.router.navigate(['/historia-det'])
  }

  guardarConsulta() {
    this.InicioDetails.vacunacion = this.opcionVacunacion
    this.InicioDetails.desparacitacion = this.opcionDesparacitacion
    this.InicioDetails.estadoR = this.opcionEstadoReproductivo
    this.InicioDetails.fecha = this.opcionFechaVacuna
    this.InicioDetails.procedencia = this.opcionProcedencia
    this.InicioDetails.idMascota=this.idHistoria
    console.log('consulta --------------', this.InicioDetails)
    this.consultaMedicaService.crearConsultaMByHistoria(this.InicioDetails)
      .subscribe((data) => {
       this.guardarConstantesFisio();

        console.log('Estamos en el metodod  de consulta M by historia')

        console.log("id de consulta", data)


      }, (error) => {
        console.log(error)
      }
      );

  }

  guardarConstantesFisio() {
    let constantePeso = new ConstantesFiosologicas(this.constatesCabList[0].constantes_idCab, this.peso);
    let constanteT = new ConstantesFiosologicas(this.constatesCabList[1].constantes_idCab, this.t);
    let constanteFCard = new ConstantesFiosologicas(this.constatesCabList[2].constantes_idCab, this.FCard);
    let constanteFResp = new ConstantesFiosologicas(this.constatesCabList[3].constantes_idCab, this.FResp);
    let constantemucosas = new ConstantesFiosologicas(this.constatesCabList[4].constantes_idCab, this.mucosas);
    let constanteFAsa = new ConstantesFiosologicas(this.constatesCabList[5].constantes_idCab, this.opcionAsa);
    let constanteturgenciapiel = new ConstantesFiosologicas(this.constatesCabList[6].constantes_idCab, this.turgenciapiel);
    let constantepulso = new ConstantesFiosologicas(this.constatesCabList[7].constantes_idCab, this.pulso);
    let constanteotras = new ConstantesFiosologicas(this.constatesCabList[8].constantes_idCab, this.otras);
    let constantetEstadoF = new ConstantesFiosologicas(this.constatesCabList[9].constantes_idCab, this.opcionEstadoFisico);
    let constanteEstadoM = new ConstantesFiosologicas(this.constatesCabList[10].constantes_idCab, this.opcionEstadoMental);

    this.constantesFisioCab.push(constantePeso)
    this.constantesFisioCab.push(constanteT)
    this.constantesFisioCab.push(constanteFCard)
    this.constantesFisioCab.push(constanteFResp)
    this.constantesFisioCab.push(constantemucosas)
    this.constantesFisioCab.push(constantepulso)
    this.constantesFisioCab.push(constanteotras)
    this.constantesFisioCab.push(constanteturgenciapiel)
    this.constantesFisioCab.push(constanteFAsa)
    this.constantesFisioCab.push(constantetEstadoF)
    this.constantesFisioCab.push(constanteEstadoM)
    console.log(this.constantesFisioCab)
    this.consultaMedicaService.crearConstantesF(this.constantesFisioCab)
    this.router.navigate(['/historias-clinicas'])
  }


}
