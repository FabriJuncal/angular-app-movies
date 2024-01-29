import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../core/shared/shared.module';



@NgModule({
  declarations: [MoviesComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: MoviesComponent,
      },
    ]),
  ]
})
export class MoviesModule { }
