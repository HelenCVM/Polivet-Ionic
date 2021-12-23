import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultamedicaService } from 'src/app/Services/consultamedica.service';
import { PropietarioServiceService } from 'src/app/Services/propietario-service.service';

@Component({
  selector: 'app-historia-det',
  templateUrl: './historia-det.page.html',
  styleUrls: ['./historia-det.page.scss'],
})
export class HistoriaDetPage implements OnInit {
idConsulta:any
consultasMedicas:any=[]
consultaByHistoria: any= []
  constructor(private consultaService: ConsultamedicaService,private router : 
    Router) { 
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
      console.log(data,"historia")
    })
  }
  editarConstantesDetByConsultaId(idConsultaMedica){
    this.consultaService.enviandoIdConsulta(idConsultaMedica)
    this.router.navigate(['/consultadet'])

  }
  agregarNuevaConsulta(){
    this.router.navigate(['/agregar-consulta'])

  }

}
