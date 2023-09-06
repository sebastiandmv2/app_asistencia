import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlumnoQrPageRoutingModule } from './alumno-qr-routing.module';

import { AlumnoQrPage } from './alumno-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlumnoQrPageRoutingModule
  ],
  declarations: [AlumnoQrPage]
})
export class AlumnoQrPageModule {}
