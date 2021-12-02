import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MascotaServiceService } from 'src/app/Services/mascota-service.service';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.page.html',
  styleUrls: ['./mascota.page.scss'],
})
export class MascotaPage implements OnInit {
  idPropietario: any
  opcionSexo: any
  opcionEspecie:any
  opcionRaza:any
  miVariableHora: string
  dateFormat: string
  public mascota: any
  razas: any=[];
  especies:any=[]
  

  @Input() InicioDetails = {
    idPro:'',nombre: '', especie: '', raza: '',
    sexo: '', fechaNac: '', edad: '',
    coloYSenalesParti: ''
  }

  constructor(private actRoute: ActivatedRoute, public router: Router, public mascotaService: MascotaServiceService) {
    this.idPropietario = actRoute.snapshot.params.idPropietario;
    console.log("idpropie", this.idPropietario)
    this.obtenerRaza();
    this.obtenerEspecie();
  }

  ngOnInit() {
  }

  guardarSexo(event: CustomEvent) {

    this.opcionSexo = event.detail.value
    console.log("sexo", this.opcionSexo)

  }
  guardarEspecie(event: CustomEvent) {
 
    this.opcionEspecie=event.detail.value
    console.log("especie",this.opcionEspecie,)

  }
  guardarRaza(event: CustomEvent) {
    this.opcionRaza=event.detail.value
    console.log("raza",this.opcionRaza)

  }


  guardarFechaNac(evento) {
    this.miVariableHora = evento.detail.value
    this.dateFormat = this.miVariableHora.split('T')[0];
    console.log("holaa", this.dateFormat);

  }
  guardarMascota() {
    console.log("mascota sexo", this.opcionSexo,"raza",this.opcionRaza,"especie",this.opcionEspecie)
    this.InicioDetails.sexo = this.opcionSexo
    this.InicioDetails.especie=this.opcionEspecie
    this.InicioDetails.raza=this.opcionRaza
    this.InicioDetails.fechaNac = this.dateFormat
    this.InicioDetails.idPro=this.idPropietario
    console.log(this.InicioDetails)
    this.mascotaService.crearMascota(this.InicioDetails)
    .subscribe((data) => {
      
      console.log('Estamos en el propietario')

      this.mascota=data
      console.log("recibo",this.mascota)   
      this.router.navigate(['/consulta-medica/',this.mascota])

      
    },(error)=>{
      console.log(error)
    }
    );
  }

  obtenerRaza(){
    this.mascotaService.obtenerRaza()
    .subscribe((data) => {
      this.razas=data
      console.log('Estamos en el raza pag princi')
      console.log(this.razas)  

      
    },(error)=>{
      console.log(error)
    }
    );
  }

  obtenerEspecie(){
    this.mascotaService.obtenerEspecie()
    .subscribe((data) => {
      this.especies=data
      console.log('Estamos en el especieee pag princi')
      console.log(this.especies)  

      
    },(error)=>{
      console.log(error)
    }
    );
  }
}
