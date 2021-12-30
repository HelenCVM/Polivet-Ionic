import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultamedicaService } from 'src/app/Services/consultamedica.service';
import { PropietarioServiceService } from 'src/app/Services/propietario-service.service';
import {RecetaService} from 'src/app/Services/receta.service';
@Component({
  selector: 'app-historia-det',
  templateUrl: './historia-det.page.html',
  styleUrls: ['./historia-det.page.scss'],
})
export class HistoriaDetPage implements OnInit {
idConsulta:any
consultasMedicas:any=[]
consultaByHistoria: any= []
consultaok:any= []
public buttonDisabled:boolean = false

  constructor(private consultaService: ConsultamedicaService,private router :
    Router,private recetaService: RecetaService) {
    console.log("Dett")
    this.consultaService.$getObjectSource.subscribe(
      data=>{
        this.idConsulta=data
        console.log('reciboo desde historia iniciar inicial',this.idConsulta)
        this.listHistoria()
        this.listConsutalbyHistoria()

      }
    )


  }

  ngOnInit() {

  }

  listHistoria(){
    this.consultaService.recuperoListHistoria(this.idConsulta).subscribe(data=>{
      console.log(data)
      this.consultasMedicas=data
    })
    console.log("consulllllllll",this.consultasMedicas)
  }

  listConsutalbyHistoria(){
    this.consultaService.consultamedicaByHistoria(this.idConsulta).subscribe(data=>{
      this.consultaByHistoria=data
      console.log('esta recibiendo las consultas ')
      console.log(typeof(this.consultaByHistoria))
      console.log(data,"historia")
      console.log(this.consultaByHistoria,"historiaaa")
      let tam =Object.keys(this.consultaByHistoria).length
      var funcs = []
      console.log(tam)
      //idConsultaMedica
      let idConsultaMedica = 0
      /*
      console.log(this.consultaByHistoria[0])
      for (let i = 0; i <= tam; i++) {
        console.log('id consul',this.consultaByHistoria[i].idConsultaMedica)
        let valorid=this.consultaByHistoria[i].idConsultaMedica
        this.ConsultamedicaOkk(valorid)
      }
      */

    })
  }
  editarConstantesDetByConsultaId(idConsultaMedica){
    this.consultaService.enviandoIdConsulta(idConsultaMedica)
    this.router.navigate(['/consultadet'])

  }

  crearReceta(idConsultaMedica){
    this.recetaService.enviandoIdConsulta(idConsultaMedica)
    this.router.navigate(['/crearreceta'])

  }

  ConsultamedicaOk(){
    this.consultaService.listaConsultaOk(this.idConsulta).subscribe(data=>{
      this.consultaok=data
      console.log('consulta ok----', this.consultaok)
      if(this.consultaok == 'creado'){
        this.buttonDisabled = true
      }else{
        this.buttonDisabled = false
      }
      console.log(data,"consulta medica hay")
    })
  }

  ConsultamedicaOkk(valor){
    this.consultaService.listaConsultaOk(valor).subscribe(data=>{
      this.consultaok=data
      console.log('consulta ok----', this.consultaok)
      if(this.consultaok == 'creado'){
        this.buttonDisabled = true
      }else{
        this.buttonDisabled = false
      }
      console.log(data,"consulta medica hay")
    })
  }

  verReceta(idConsultaMedica){
    this.recetaService.enviandoIdConsulta(idConsultaMedica)
    this.router.navigate(['/verreceta'])

  }

  agregarNuevaConsulta(){
    this.router.navigate(['/agregar-consulta'])

  }

}
