import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'profesor-home',
    loadChildren: () => import('./profesor-home/profesor-home.module').then( m => m.ProfesorHomePageModule)
  },
  {
    path: 'alumno-qr',
    loadChildren: () => import('./alumno-qr/alumno-qr.module').then( m => m.AlumnoQrPageModule)
  },
  {
    path: 'profesor-qr',
    loadChildren: () => import('./profesor-qr/profesor-qr.module').then( m => m.ProfesorQrPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
