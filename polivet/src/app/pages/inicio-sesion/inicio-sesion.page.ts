import { Component, OnInit,Input} from '@angular/core';
import { Router } from '@angular/router';
import {Medico} from 'src/app/Modelo/Medico';
import {IniciosesionService} from '../../Services/iniciosesion.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})
export class InicioSesionPage implements OnInit {
 usuario: Medico

 @Input() InicioDetails = {
  correo:'', contrasena:''
}

constructor(public router: Router,public inicioservice:IniciosesionService ) { }

  ngOnInit(): void{
  }



  addInicio(dataBill) {
    console.log('Addinicio')
    this.inicioservice.iniciar(this.InicioDetails).subscribe((data: {}) => {
      console.log('data')
      let correop=data
      console.log('Estamos en el ADDINICIOSESION')
      console.log(correop)
      if(correop =='No creado'){
        return this.router.navigate(['/inicio-sesion'])
      }else{
        this.inicioservice.enviandocorreo(correop)
        return this.router.navigate(['/paginal-inicial'])
      }

    })
  }

}
