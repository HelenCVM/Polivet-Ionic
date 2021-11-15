import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-drawer',
  templateUrl: './menu-drawer.page.html',
  styleUrls: ['./menu-drawer.page.scss'],
})
export class MenuDrawerPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

}
