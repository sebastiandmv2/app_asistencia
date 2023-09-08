import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from "@angular/router";

@Component({
  selector: 'app-profesor-qr',
  templateUrl: './profesor-qr.page.html',
  styleUrls: ['./profesor-qr.page.scss'],
})
export class ProfesorQrPage implements OnInit {

  userProfesor ="";
  userName ="";
  nomClase="";
  codClase="";

  constructor(private route: ActivatedRoute,private router:Router) {

    if (this.router.getCurrentNavigation()?.extras.state) {
      const state = this.router.getCurrentNavigation()?.extras.state;
      this.userProfesor = this.router.getCurrentNavigation()?.extras.state?.['user'];
      this.userName = this.router.getCurrentNavigation()?.extras.state?.['name'];
    }
    this.route.queryParams.subscribe(params => {

      this.nomClase = params['clase'];
      this.codClase = params['codigo'];
    });
    
  }

  

  ngOnInit() {
  }
}