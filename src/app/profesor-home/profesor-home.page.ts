import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { ActivatedRoute, Router, NavigationExtras } from "@angular/router";

@Component({
  selector: 'app-profesor-home',
  templateUrl: './profesor-home.page.html',
  styleUrls: ['./profesor-home.page.scss'],
})
export class ProfesorHomePage implements OnInit {

userHome = "";
userName = "";
clase="";
codigo="";

  constructor(
    private activeroute: ActivatedRoute,
    private actionSheetCtrl: ActionSheetController,
    private router: Router
    
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

  async presentActionSheet(clase: string, codigo: string) {

    const navigationExtras: NavigationExtras = {
      state: {
        user: this.userHome,
        name: this.userName,
      }
    };

    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Generador de QR',
      buttons: [
        {
          text: 'Generar QR',
          handler: () => {
            this.router.navigate(['/profesor-qr'], navigationExtras);
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
        },
      ],
    });

    await actionSheet.present();
  }
}
