import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { Propietario } from 'src/app/Modelo/Propietario';
import { PropietarioServiceService } from 'src/app/Services/propietario-service.service';

@Component({
  selector: 'app-propietario',
  templateUrl: './propietario.page.html',
  styleUrls: ['./propietario.page.scss'],
})
export class PropietarioPage implements OnInit {

  propietario: Propietario = new Propietario();

  @Input() InicioDetails = {
    idPropietario: '', nombrePropietario: '',
    direccion: '', ciudad: '', telefono: '',
    correo: ''
  }

  public form: FormGroup
  constructor(private formBuilder: FormBuilder,public propietarioService: PropietarioServiceService, public router: Router) {


  }


  ngOnInit(): void {
    this.form=this.formBuilder.group( {
      cedula:['',
      [
        Validators.required,
        Validators.pattern('^[0-9]+$'),
        Validators.minLength(10)
      ]
      ],
      propietario:['',[Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]],
      ciudad:['',[Validators.required,Validators.pattern(/^[a-zA-Z ]+$/)]],
      direccion:['',[Validators.required]],
      telefono:['',Validators.compose([
        Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(10)])],
      correo:['',[Validators.required, Validators.email]],

      
    })
  }




  guardar(dataBill) {
    this.router.navigate(['/mascota/',this.InicioDetails.idPropietario])
    this.propietarioService.crearPropietario(this.InicioDetails).subscribe((data: {}) => {
      let propietarios = data
      console.log('Estamos en el propietario')
      console.log(this.propietario)     
      console.log("routerrr")

    });

  }
  cancelar(){
    this.router.navigate(['/paginal-inicial'])
  }

  public inputValidator(event: any) {
    //console.log(event.target.value);
    const pattern = /^[0-9]*$/;   
    //let inputChar = String.fromCharCode(event.charCode)
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^a-zA-Z0-9]/g, "");
      // invalid character, prevent input
  
    }
  }
}
