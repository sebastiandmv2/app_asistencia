import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router'; // Importa Router

@Component({
  selector: 'app-profesor-home',
  templateUrl: './profesor-home.page.html',
  styleUrls: ['./profesor-home.page.scss'],
})
export class ProfesorHomePage implements OnInit {
  constructor(
    private actionSheetCtrl: ActionSheetController,
    private router: Router // Inyecta Router
  ) {}

  ngOnInit() {
  }

  async presentActionSheet() {
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
