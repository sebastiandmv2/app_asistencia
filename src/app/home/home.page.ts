import { Component } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private animationCtrl: AnimationController) {}

  ionViewDidEnter() {
    const button = document.getElementById('login-button');

    // Verifica si el botón existe en la vista
    if (button) {
      const animation = this.animationCtrl.create()
        .addElement(button)
        .duration(1000) // Duración de la animación en milisegundos
        .fromTo('transform', 'scale(-5)', 'scale(1)'); //  aumento de tamaño

      animation.play();
    }
  }
}
