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

  cedula:any
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
  public validador; //esta variable se la puede usar para realizar la validacion en el html del component


  validadorDeCedula(event) {
    let cedula=  event.detail.value
    let cedulaCorrecta = false;
    
    if (cedula.length == 10)
    {    
        let tercerDigito = parseInt(cedula.substring(2, 3));
        if (tercerDigito < 6) {
        
            // El ultimo digito se lo considera dígito verificador
            let coefValCedula = [2, 1, 2, 1, 2, 1, 2, 1, 2];       
            let verificador = parseInt(cedula.substring(9, 10));
            let suma:number = 0;
            let digito:number = 0;
            for (let i = 0; i < (cedula.length - 1); i++) {
                digito = parseInt(cedula.substring(i, i + 1)) * coefValCedula[i];      
                suma += ((parseInt((digito % 10)+'') + (parseInt((digito / 10)+''))));
                console.log(suma+" suma"+coefValCedula[i]); 
            }
            
            suma= Math.round(suma);
          
          //  console.log(verificador);
          //  console.log(suma);
          //  console.log(digito);
  
            if ((Math.round(suma % 10) == 0) && (Math.round(suma % 10)== verificador)) {
                cedulaCorrecta = true;
                console.log('correcto')
            } else if ((10 - (Math.round(suma % 10))) == verificador) {
                cedulaCorrecta = true;
                console.log('correcto')

            } else {
                cedulaCorrecta = false;
                console.log('incorrecto')

            }
        } else {
            cedulaCorrecta = false;
            console.log('incorrecto')

        }
    } else {
        cedulaCorrecta = false;
        console.log('incorrecto')

    }
  
  
  this.validador= cedulaCorrecta;
  console.log(this.validador)
  
    
  }
}
