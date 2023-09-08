import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsistenciaCheckPage } from './asistencia-check.page';

const routes: Routes = [
  {
    path: '',
    component: AsistenciaCheckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsistenciaCheckPageRoutingModule {}
