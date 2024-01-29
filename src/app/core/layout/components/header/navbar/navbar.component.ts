import { Component } from '@angular/core';
import { MenuService } from '../../../../services/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isDesktop = window.innerWidth > 768;
  isChecked = false;
  isMenuOpen = false;

  constructor(private _menuService: MenuService) {
    window.addEventListener('resize', () => {
      this.isDesktop = window.innerWidth > 768;

      if(this.isDesktop){
        this._menuService.closeMenu();
      }
    });
  }
}
