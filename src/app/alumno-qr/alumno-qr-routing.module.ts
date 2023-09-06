import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlumnoQrPage } from './alumno-qr.page';

const routes: Routes = [
  {
    path: '',
    component: AlumnoQrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlumnoQrPageRoutingModule {}
