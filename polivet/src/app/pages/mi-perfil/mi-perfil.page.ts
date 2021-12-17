import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MiperfilService} from '../../Services/miperfil.service';
import { IniciosesionService } from 'src/app/Services/iniciosesion.service';
@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.page.html',
  styleUrls: ['./mi-perfil.page.scss'],
})
export class MiPerfilPage implements OnInit {
  public correopda:any
  public Medico: any=[];
  public correoperfil:any
  public tipoespe:any

  constructor(private actRoute:ActivatedRoute,  public router: Router,private medicoservice: MiperfilService, public inicioservice: IniciosesionService) {
   }

  ngOnInit():void {
    this.inicioservice.$getObjectSource.subscribe(
      data=>{
        this.correoperfil=data
        console.log('reciboo desde paag inicial',this.correoperfil)
      }
    )

    this.medicoservice.getMedico(this.correoperfil)
    .subscribe( (data) =>{
      console.log('ESTE ES EL CORREO',this.correoperfil)
      this.Medico=data;
      console.log(data);
      console.log('datos mas especificos')

      console.log(this.Medico.especialidad_id.tipoEspecialidad)
      console.log(this.Medico.usuario_id.correo)
      this.tipoespe = this.Medico.especialidad_id.tipoEspecialidad
    }, (error) =>{
      console.log(error)
    }
    );


  }


}
