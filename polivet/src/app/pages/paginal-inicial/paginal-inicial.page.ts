import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';

@Component({
  selector: 'app-paginal-inicial',
  templateUrl: './paginal-inicial.page.html',
  styleUrls: ['./paginal-inicial.page.scss'],
})
export class PaginalInicialPage implements OnInit {
  public correop:any
  public correopda:any

  constructor(private actRoute:ActivatedRoute,  public router: Router,private http: HttpClient) {
    this.correop =actRoute.snapshot.params.correop;
    this.correopda = this.correop
    this.router.navigate(['/mi-perfil/',this.correopda])
    //this.http.get('/mi-perfil/'+this.correopda);
  }

  ngOnInit() {

  }

}
