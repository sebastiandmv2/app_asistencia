import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsistenciaCheckPageRoutingModule } from './asistencia-check-routing.module';

import { AsistenciaCheckPage } from './asistencia-check.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsistenciaCheckPageRoutingModule
  ],
  declarations: [AsistenciaCheckPage]
})
export class AsistenciaCheckPageModule {}
