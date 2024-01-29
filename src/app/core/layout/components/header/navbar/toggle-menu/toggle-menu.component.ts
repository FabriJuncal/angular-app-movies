// Importaciones necesarias de Angular y otros módulos
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuService } from 'src/app/core/services/menu.service';

/**
 * Componente que representa un menú desplegable.
 */
@Component({
  selector: 'app-toggle-menu',
  templateUrl: './toggle-menu.component.html',
  styleUrls: ['./toggle-menu.component.scss']
})
export class ToggleMenuComponent {
  // Propiedad de entrada para controlar la apertura o cierre del menú
  @Input() isOpen = false;

  // Evento de salida para notificar la selección de un menú
  @Output() selectedMenu = new EventEmitter<boolean>();

  /**
   * Constructor del componente.
   * @param _menuService Servicio que gestiona el estado del menú.
   */
  constructor(private _menuService: MenuService) {
    // Suscripción al observable `isMenuOpen$` del servicio para mantener sincronizado el estado del menú
    this._menuService.isMenuOpen$.subscribe((isOpen) => {
      this.isOpen = isOpen;
    });
  }

  /**
   * Método para cerrar el menú y emitir un evento indicando la selección de un menú.
   */
  closeMenuAndNavigate() {
    // Llamada al método `toggleMenu()` del servicio para cerrar el menú
    this._menuService.toggleMenu();
  }
}
