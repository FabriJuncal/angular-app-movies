// Importaciones necesarias de Angular
import { ViewChild, ElementRef } from '@angular/core';
import { Component, EventEmitter, Output } from '@angular/core';

/**
 * Componente para realizar búsquedas.
 */
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  // Evento de salida que emite el término de búsqueda
  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  // Referencia al elemento de entrada de búsqueda en la interfaz
  @ViewChild('searchInput') searchInput: ElementRef;
  // Variable para almacenar el término de búsqueda
  searchQuery: any;

  /**
   * Método que se ejecuta al hacer clic en el botón de búsqueda.
   */
  onSearch(): void {
    // Se llama al método blur para perder el foco y de esta forma cambiar el texto del input
    this.searchInput.nativeElement.blur();
    // Emitir el evento de búsqueda con el término actual
    this.search.emit(this.searchQuery);
  }
}
