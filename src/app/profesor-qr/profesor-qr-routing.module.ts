import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfesorQrPage } from './profesor-qr.page';

const routes: Routes = [
  {
    path: '',
    component: ProfesorQrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfesorQrPageRoutingModule {}
