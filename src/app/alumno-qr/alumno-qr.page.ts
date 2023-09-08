import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-alumno-qr',
  templateUrl: './alumno-qr.page.html',
  styleUrls: ['./alumno-qr.page.scss'],
})
export class AlumnoQrPage implements OnInit {

  userAlumno ="";
  userName ="";
  constructor(private activeroute: ActivatedRoute,private router:Router) {

    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
          this.userAlumno = this.router.getCurrentNavigation()?.extras.state?.['user'];
          this.userName = this.router.getCurrentNavigation()?.extras.state?.['name'];
      }
  });

   }

  ngOnInit() {
  }

}

