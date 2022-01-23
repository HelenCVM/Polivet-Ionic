import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultamedicaService } from 'src/app/Services/consultamedica.service';
import { PropietarioServiceService } from 'src/app/Services/propietario-service.service';
import {LocalstoreService} from '../../Services/localstore.service';

@Component({
  selector: 'app-listar-propietarios',
  templateUrl: './listar-propietarios.page.html',
  styleUrls: ['./listar-propietarios.page.scss'],
})
export class ListarPropietariosPage implements OnInit {
  cp = 1
  listPropietario: any = []
  filtroPropietario = '';
  private _localStorage: Storage;

  constructor(private _localStorageRefService: LocalstoreService,private propietarioService: PropietarioServiceService, 
    private router: Router,private consultaService: ConsultamedicaService) {
    this._localStorage = _localStorageRefService.localStorage
    this.obtenerListPropietarios();
  }

  ngOnInit() {
    if(this._localStorage.length < 1){
      this.router.navigate(['/inicio-sesion'])
    }
  }

  obtenerListPropietarios() {
    this.consultaService.recuperoListDeConsultasMedicas()
    .subscribe((data) => {
      this.listPropietario = data
      console.log('Estamos en historias')
      console.log(this.listPropietario)

    }, (error) => {
      console.log(error)
    }
    );
}


  editarPropietario(idPropietario) {
    console.log("id propo", idPropietario)
    this.propietarioService.enviarIdPropietario(idPropietario)
    this.router.navigate(['/propietario-detale'])

  }
  buscarPaciente(event) {
    console.log("buscar", event.detail.value)
    this.filtroPropietario = event.detail.value
  }

  atras(){
    this.router.navigate(['/paginal-inicial'])
  }
}
