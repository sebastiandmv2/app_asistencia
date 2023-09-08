import { Component } from '@angular/core';
import { Usuario } from 'usuario.model';
import { Router, NavigationExtras } from '@angular/router'; // Importa el Router

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  user: Usuario = new Usuario();
  isPasswordValid: boolean = false;
  validEmailPattern: string = '^(jirafales@duoc.cl|corchea@duoc.cl)$';

  constructor(private router: Router) {} // Inyecta el servicio Router

  validateUser(user: Usuario): boolean {
    if (
      (user.email === 'jirafales@duoc.cl' && user.password === 'jirafales123') ||
      (user.email === 'corchea@duoc.cl' && user.password === 'corchea123')
    ) {
      return true;
    } else {
      return false;
    }
  }

  validatePassword() {
    if (this.user.email === 'jirafales@duoc.cl' && this.user.password === 'jirafales123') {
      this.isPasswordValid = true;
    } else if (this.user.email === 'corchea@duoc.cl' && this.user.password === 'corchea123') {
      this.isPasswordValid = true;
    } else {
      this.isPasswordValid = false;
    }
  }
  getUserName(email: string): string {
    if (email === 'jirafales@duoc.cl') {
      return 'Jirafales';
    } else if (email === 'corchea@duoc.cl') {
      return 'Corchea';
    }
    return '';
  }
  login() {
    console.log('Iniciando sesión con:', this.user.email, this.user.password);

    if (this.validateUser(this.user)) {
      console.log('Inicio de sesión exitoso');

      // creamos una state con n datos para acceder a ellos en los siguientes page
      let NavigationExtras: NavigationExtras = {
      state: {user: this.user.email, telefono: "111111", name: this.getUserName(this.user.email)}

      };

      // Redirige al usuario a la página adecuada después del inicio de sesión
      if (this.user.email === 'jirafales@duoc.cl') {
        this.router.navigate(['/profesor-home'],NavigationExtras); // Redirige a la página del profesor
      }
      else if (this.user.email === 'corchea@duoc.cl') {
        this.router.navigate(['/alumno-home'],NavigationExtras); // Redirige a la página del alumno
      } else {
        // Redirige a la página predeterminada (por ejemplo, scanner)
        this.router.navigate(['/scanner']);
      }
    } else {
      console.log('Credenciales incorrectas');
    }
 }
}