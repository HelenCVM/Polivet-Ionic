import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import { MiperfilService } from 'src/app/Services/miperfil.service';
import {IniciosesionService} from '../../Services/iniciosesion.service';
import { NavController } from '@ionic/angular';
import {LocalstoreService} from '../../Services/localstore.service';

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
  public condition: boolean = true;
  private _localStorage: Storage;
  public usuario_id:any
  public medico: any
  public nombres:any
  public apellidos:any
  //true sale .false no sale

  constructor(private _localStorageRefService: LocalstoreService,public navCtrl: NavController,private actRoute:ActivatedRoute,  public router: Router,private http: HttpClient, public miperfilservice: MiperfilService,public inicioservice:IniciosesionService ) {
   // this.miperfilservice.enviandocorreo(this.correop)
   this._localStorage = _localStorageRefService.localStorage

  }

  ngOnInit() {
    if(this._localStorage.length < 1){
      this.router.navigate(['/inicio-sesion'])
    }
    console.log(this._localStorage.length)
    console.log(this._localStorage.getItem)
    this.inicioservice.$getObjectSource.subscribe(
      data=>{
        console.log(data)
        this.datajs=data
        this.usuario_id = this.datajs.usuario_id
        console.log(this.usuario_id)
        this.correop=this.datajs.correo
        this.rol = this.datajs.rol_id.descripcion
        console.log('rol---pagina inicio',this.rol)
        console.log(this.correop)
        //getMedico
        this.inicioservice.getMedico(this.usuario_id)
        .subscribe((data) => {
          this.medico = data
          this.nombres = this.medico.nombres
          this.apellidos = this.medico.apellidos
          console.log('medico devuelto por el id usuario',this.medico)
        })
        if(this.rol == 'medico'){
          this.condition = false;
        }else{
          this.condition = true;
        }
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
