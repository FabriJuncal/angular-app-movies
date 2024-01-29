import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private isMenuOpenSubject = new BehaviorSubject<boolean>(false);
  isMenuOpen$ = this.isMenuOpenSubject.asObservable();

  toggleMenu() {
    const currentValue = this.isMenuOpenSubject.value;
    this.isMenuOpenSubject.next(!currentValue);
  }

  closeMenu() {
    this.isMenuOpenSubject.next(false);
  }
}
