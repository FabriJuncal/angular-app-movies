import { Component } from '@angular/core';
import { MenuService } from '../../../../services/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isDesktop = window.innerWidth > 768; // Variable para verificar si la pantalla es de escritorio
  isChecked = false; // Variable para el estado del interruptor (toggle)
  isMenuOpen = false; // Variable para el estado del menú

  constructor(private _menuService: MenuService) {
    // Evento de cambio de tamaño de la ventana
    window.addEventListener('resize', () => {
      // Actualiza la variable isDesktop según el ancho de la ventana
      this.isDesktop = window.innerWidth > 768;

      // Cierra el menú si la pantalla es de escritorio
      if (this.isDesktop) {
        this._menuService.closeMenu();
      }
    });
  }
}
