// Importaciones necesarias de Angular y otros módulos
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/**
 * Servicio que proporciona métodos para gestionar el estado del menú.
 */
@Injectable({
  providedIn: 'root'
})
export class MenuService {
  // Sujeto (Subject) para gestionar el estado de apertura del menú
  private isMenuOpenSubject = new BehaviorSubject<boolean>(false);
  // Observable que otros componentes pueden observar para conocer el estado del menú
  isMenuOpen$ = this.isMenuOpenSubject.asObservable();

  /**
   * Método para alternar el estado del menú entre abierto y cerrado.
   */
  toggleMenu() {
    // Obtener el valor actual del estado del menú
    const currentValue = this.isMenuOpenSubject.value;
    // Cambiar el valor del estado del menú al contrario del valor actual
    this.isMenuOpenSubject.next(!currentValue);
  }

  /**
   * Método para cerrar el menú.
   */
  closeMenu() {
    // Establecer el estado del menú como cerrado
    this.isMenuOpenSubject.next(false);
  }
}
