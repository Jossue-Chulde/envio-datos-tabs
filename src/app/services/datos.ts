import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  nombre = signal('');
  direccion = signal('');
  contador = signal(0);
  edad = signal(0);
  enviado = signal(false);

  guardar(
    nombre: string,
    direccion: string,
    contador: number,
    edad: number
  ): void {
    this.nombre.set(nombre);
    this.direccion.set(direccion);
    this.contador.set(contador);
    this.edad.set(edad);
    this.enviado.set(true);
  }
}