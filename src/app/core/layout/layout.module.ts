import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { RouterModule, Routes } from '@angular/router';
import { Routing } from '../../pages/routing';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { HamburgerButtonComponent } from './components/header/navbar/hamburger-button/hamburger-button.component';
import { ToggleMenuComponent } from './components/header/navbar/toggle-menu/toggle-menu.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
    children: Routing
  },
];

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    NavbarComponent,
    HamburgerButtonComponent,
    ToggleMenuComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  exports: [RouterModule]
})
export class LayoutModule { }
