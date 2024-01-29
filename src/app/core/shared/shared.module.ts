import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { TableComponent } from './components/table/table.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoaderComponent,
    TableComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    LoaderComponent,
    TableComponent,
    SearchComponent
  ]
})
export class SharedModule { }
