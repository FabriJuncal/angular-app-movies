// Importaciones necesarias de Angular y otros módulos
import { Component } from '@angular/core';
import { MenuService } from 'src/app/core/services/menu.service';

/**
 * Componente que representa un botón de hamburguesa.
 */
@Component({
  selector: 'app-hamburger-button',
  templateUrl: './hamburger-button.component.html',
  styleUrls: ['./hamburger-button.component.scss']
})
export class HamburgerButtonComponent {
  // Propiedad para verificar si el botón está marcado o no
  isChecked = false;

  /**
   * Constructor del componente.
   * @param _menuService Servicio que gestiona el estado del menú.
   */
  constructor(private _menuService: MenuService) {
    // Suscripción al observable `isMenuOpen$` del servicio para mantener sincronizado el estado del botón
    this._menuService.isMenuOpen$.subscribe((isOpen) => {
      this.isChecked = isOpen;
    });
  }

  /**
   * Método para alternar el estado del menú.
   */
  toggleMenu() {
    // Llamada al método `toggleMenu()` del servicio para alternar el estado del menú
    this._menuService.toggleMenu();
  }
}
