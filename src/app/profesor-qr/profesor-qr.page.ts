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
  constructor(private activeroute: ActivatedRoute,private router:Router) {

    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
          this.userProfesor = this.router.getCurrentNavigation()?.extras.state?.['user'];
          this.userName = this.router.getCurrentNavigation()?.extras.state?.['name'];
      }
  });

   }

  ngOnInit() {
  }

}