import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuService } from 'src/app/core/services/menu.service';

@Component({
  selector: 'app-toggle-menu',
  templateUrl: './toggle-menu.component.html',
  styleUrls: ['./toggle-menu.component.scss']
})
export class ToggleMenuComponent {
  @Input() isOpen = false;
  @Output() selectedMenu = new EventEmitter<boolean>();

  constructor(private _menuService: MenuService) {
    this._menuService.isMenuOpen$.subscribe((isOpen) => {
      this.isOpen = isOpen;
    });
  }

  closeMenuAndNavigate() {
    this._menuService.toggleMenu();
  }

}
