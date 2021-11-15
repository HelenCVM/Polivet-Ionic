import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MiperfilService} from '../../Services/miperfil.service';
@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.page.html',
  styleUrls: ['./mi-perfil.page.scss'],
})
export class MiPerfilPage implements OnInit {
  public correopda:any
  public Medico: any=[];

  constructor(private actRoute:ActivatedRoute,  public router: Router,private medicoservice: MiperfilService) {
    this.correopda =actRoute.snapshot.params.correopda;
    console.log(this.correopda)
   }

  ngOnInit():void {
    this.medicoservice.getMedico(this.correopda)
    .subscribe( (data) =>{
      console.log('ESTE ES EL CORREO',this.correopda)
      this.Medico=data;
      console.log(data);
    }, (error) =>{
      console.log(error)
    }
    );
  }


}
