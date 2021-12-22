import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropietarioServiceService } from 'src/app/Services/propietario-service.service';

@Component({
  selector: 'app-listar-propietarios',
  templateUrl: './listar-propietarios.page.html',
  styleUrls: ['./listar-propietarios.page.scss'],
})
export class ListarPropietariosPage implements OnInit {
  listPropietario:any=[]
  filtroPropietario:''
  constructor(private propietarioService:PropietarioServiceService,private router : Router) {
    this.obtenerListPropietarios()
   }

  ngOnInit() {
  }

  obtenerListPropietarios(){
    this.propietarioService.listarPropietarios()
    .subscribe((data) => {
      this.listPropietario=data
      console.log("list propi", this.listPropietario)
    })
  }
  
  buscarPaciente(event){
    console.log("buscar", event.detail.value)
    this.filtroPropietario=event.detail.value
  }
  editarPropietario(idPropietario){
    console.log("id propo", idPropietario)
    this.propietarioService.enviarIdPropietario(idPropietario)
    this.router.navigate(['/propietario-detale'])

  }
}
