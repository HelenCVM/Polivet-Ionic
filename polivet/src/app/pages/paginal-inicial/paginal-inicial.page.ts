import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import { MiperfilService } from 'src/app/Services/miperfil.service';
import {IniciosesionService} from '../../Services/iniciosesion.service';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-paginal-inicial',
  templateUrl: './paginal-inicial.page.html',
  styleUrls: ['./paginal-inicial.page.scss'],
})
export class PaginalInicialPage implements OnInit {
  public correop:any
  public correopda:any
  public rol:any
  public datajs:any

  constructor(public navCtrl: NavController,private actRoute:ActivatedRoute,  public router: Router,private http: HttpClient, public miperfilservice: MiperfilService,public inicioservice:IniciosesionService ) {
   // this.miperfilservice.enviandocorreo(this.correop)

  }

  ngOnInit() {
    this.inicioservice.$getObjectSource.subscribe(
      data=>{
        console.log(data)
        this.datajs=data
        this.correop=this.datajs.correo
        this.rol = this.datajs.rol_id.descripcion
        console.log('rol---pagina inicio',this.rol)
        console.log(this.correop)
        this.miperfilservice.enviandocorreo(this.correop)
        console.log('reciboo desde paag inicial correo--',this.datajs)
      }
    )



  }

  slides=[
    {
      img: "https://estaticos.muyinteresante.es/media/cache/1000x460_thumb/uploads/images/gallery/5b755a235cafe886f57f0c61/golden-cachorro_0.jpg"
    },
    {
      img: "../../../assets/imagenes/2.png"
    },
    {
      img: "../../../assets/imagenes/3.jpg"
    },
    {
      img: "../../../assets/imagenes/4.jpg"
    },
    {
      img: "../../../assets/imagenes/5.jpg"
    },
    {
      img: "../../../assets/imagenes/6.jpg"
    }
  ]

}
