import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuService } from 'src/app/core/services/menu.service';

@Component({
  selector: 'app-hamburger-button',
  templateUrl: './hamburger-button.component.html',
  styleUrls: ['./hamburger-button.component.scss']
})
export class HamburgerButtonComponent {
  isChecked = false;

  constructor(private _menuService: MenuService) {
    this._menuService.isMenuOpen$.subscribe((isOpen) => {
      this.isChecked = isOpen;
    });
  }

  toggleMenu(){
    this._menuService.toggleMenu();
  }
}
