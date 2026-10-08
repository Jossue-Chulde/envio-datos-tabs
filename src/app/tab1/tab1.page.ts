import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonInput,
  IonButton
} from '@ionic/angular';
import { DatosService } from '../services/datos';

@Component({
  selector: 'app-tab1',
  standalone: true,
  templateUrl: './tab1.page.html',
  imports: [
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonInput,
    IonButton
  ]
})
export class Tab1Page {
  nombre = '';
  direccion = '';
  contador = 0;
  edad = 0;
  mensaje = '';

  private datos = inject(DatosService);
  private router = inject(Router);

  // CONTADOR DE EDAD
  aumentar1(): void {
    this.edad++;
  }

  disminuir1(): void {
    if (this.edad > 0) {
      this.edad--;
    }
  }

  reiniciar1(): void {
    this.edad = 0;
  }

  // CONTADOR NORMAL
  aumentar(): void {
    this.contador++;
  }

  disminuir(): void {
    if (this.contador > 0) {
      this.contador--;
    }
  }

  reiniciar(): void {
    this.contador = 0;
  }

  // ENVÍO DE DATOS AL TAB2
  enviar(): void {
    const nombreLimpio = this.nombre.trim();
    const direccionLimpia = this.direccion.trim();

    if (!nombreLimpio) {
      this.mensaje = 'Ingresa tu nombre antes de continuar.';
      return;
    }

    if (!direccionLimpia) {
      this.mensaje = 'Ingresa tu dirección antes de continuar.';
      return;
    }

    this.mensaje = '';

    this.datos.guardar(
      nombreLimpio,
      direccionLimpia,
      this.contador,
      this.edad
    );

    this.router.navigateByUrl('/tabs/tab2');
  }
}