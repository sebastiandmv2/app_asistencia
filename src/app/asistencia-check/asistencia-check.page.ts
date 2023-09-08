import { Component, OnInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-asistencia-check',
  templateUrl: './asistencia-check.page.html',
  styleUrls: ['./asistencia-check.page.scss'],
})
export class AsistenciaCheckPage{

  constructor(private animationCtrl: AnimationController) {}

  ionViewDidEnter() {
    const button = document.getElementById('check-box');

    // Verifica si el botón existe en la vista
    if (button) {
      const animation = this.animationCtrl.create()
        .addElement(button)
        .duration(1000) // Duración de la animación en milisegundos
        .fromTo('transform', 'scale(0.05)', 'scale(1)'); //  aumento de tamaño

      animation.play();
    }
  }
}

