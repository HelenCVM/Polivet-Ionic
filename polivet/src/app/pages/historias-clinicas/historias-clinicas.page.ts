import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultamedicaService } from 'src/app/Services/consultamedica.service';

@Component({
  selector: 'app-historias-clinicas',
  templateUrl: './historias-clinicas.page.html',
  styleUrls: ['./historias-clinicas.page.scss'],
})
export class HistoriasClinicasPage implements OnInit {
  historiaClinicaList:any=[]
  filtroPropietario='';
  constructor(private consultaService: ConsultamedicaService, private router : Router) {
this.obtenerConsultasMedicas();

   }

  ngOnInit() {
  }

  obtenerConsultasMedicas(){
    this.consultaService.recuperoListDeConsultasMedicas()
    .subscribe((data) => {
      this.historiaClinicaList=data
      console.log('Estamos en historias')
      console.log(this.historiaClinicaList)  

      
    },(error)=>{
      console.log(error)
    }
    );
  }

  editarConsultasMedicasById(idHistorial){
    this.consultaService.enviandoIdHistoria(idHistorial)
    this.router.navigate(['/historia-det'])
    console.log(idHistorial)
  }

  buscarPaciente(event){
    console.log("buscar", event.detail.value)
    this.filtroPropietario=event.detail.value
  }
}
