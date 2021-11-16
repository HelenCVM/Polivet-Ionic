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
  miVariableHora: string
  dateFormat: string
  public mascota: any

  @Input() InicioDetails = {
    idPro:'',nombre: '', especie: '', raza: '',
    sexo: '', fechaNac: '', edad: '',
    coloYSenalesParti: ''
  }

  constructor(private actRoute: ActivatedRoute, public router: Router, public mascotaService: MascotaServiceService) {
    this.idPropietario = actRoute.snapshot.params.idPropietario;
    console.log("idpropie", this.idPropietario)
  }

  ngOnInit() {
  }

  guardarSexo(event: CustomEvent) {

    this.opcionSexo = event.detail.value
    console.log("sexoooooo", this.opcionSexo)


  }

  guardarFechaNac(evento) {
    this.miVariableHora = evento.detail.value
    this.dateFormat = this.miVariableHora.split('T')[0];
    console.log("holaa", this.dateFormat);

  }
  guardarMascota() {
    console.log("mascota sexo", this.opcionSexo)
    this.InicioDetails.sexo = this.opcionSexo
    this.InicioDetails.fechaNac = this.dateFormat
    this.InicioDetails.idPro=this.idPropietario
    console.log(this.InicioDetails)
    this.mascotaService.crearMascota(this.InicioDetails)
    .subscribe((data) => {
      
      console.log('Estamos en el propietario')

      this.mascota=JSON.parse(data);
      console.log("recibo",this.mascota)   
      this.router.navigate(['/consulta-medica/',this.mascota])

      
    },(error)=>{
      console.log(error)
    }
    );
  }
}
