import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { ActivatedRoute, Router, NavigationExtras } from "@angular/router";

@Component({
  selector: 'app-alumno-home',
  templateUrl: './alumno-home.page.html',
  styleUrls: ['./alumno-home.page.scss'],
})
export class AlumnoHomePage implements OnInit {


userHome = "";
userName = "";


  constructor(private activeroute: ActivatedRoute,
    private actionSheetCtrl: ActionSheetController,

    private router: Router // Inyecta Router
  ) {

    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
          this.userHome = this.router.getCurrentNavigation()?.extras.state?.['user'];
          this.userName = this.router.getCurrentNavigation()?.extras.state?.['name'];
      }
    });
  }
  ngOnInit() {
  }

}
