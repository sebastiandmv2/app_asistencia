import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfesorQrPageRoutingModule } from './profesor-qr-routing.module';

import { ProfesorQrPage } from './profesor-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfesorQrPageRoutingModule
  ],
  declarations: [ProfesorQrPage]
})
export class ProfesorQrPageModule {}
