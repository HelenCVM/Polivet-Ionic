import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import { MiperfilService } from 'src/app/Services/miperfil.service';

@Component({
  selector: 'app-paginal-inicial',
  templateUrl: './paginal-inicial.page.html',
  styleUrls: ['./paginal-inicial.page.scss'],
})
export class PaginalInicialPage implements OnInit {
  public correop:any
  public correopda:any

  constructor(private actRoute:ActivatedRoute,  public router: Router,private http: HttpClient, public miperfilservice: MiperfilService) {
    this.miperfilservice.enviandocorreo(this.correop)

  }

  ngOnInit() {
    this.miperfilservice.$getObjectSource.subscribe(
      data=>{
        this.correop=data
        console.log('reciboo desde paag inicial',this.correop)
      }
    )

  }

}
