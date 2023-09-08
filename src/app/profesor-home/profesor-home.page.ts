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

  async presentActionSheet() {

    let NavigationExtras: NavigationExtras = {
      state: {user: this.userHome, name: this.userName}
    };

    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Generador de QR',
      buttons: [
        {
          text: 'Generar QR',
          data: {
            action: 'qrGenerate',
          },
          handler: () => {
            this.router.navigate(['/profesor-qr']); 
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();
  }
}
