import { ViewChild, ElementRef } from '@angular/core';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('searchInput') searchInput: ElementRef;
  searchQuery: any;

  onSearch(): void {
    // Llamar al método blur para perder el foco y de esta forma cambiar el texto del input
    this.searchInput.nativeElement.blur();
    this.search.emit(this.searchQuery);
  }
}

