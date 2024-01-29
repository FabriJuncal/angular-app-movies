import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() data: any[] = [];
  @Input() columns: any[] = [];

  // Propiedad para manejar la ordenación
  sortColumn: string;
  sortDirection: 'asc' | 'desc' = 'asc';

  ngOnInit(): void {
  // Buscar la primera columna que no sea de tipo imagen
  const firstNonImageColumn = this.columns.find(column => column.type !== 'image');

  if (firstNonImageColumn) {
    // Ordena la 1er columna que no sea de tipo "image  "
    this.sortColumn = firstNonImageColumn.name;
    this.sort();
  }

    console.log('data->', this.data);
  }

  // Función para manejar clics en los encabezados de columna
  onSort(column: any): void {

    if(!this.data || column.type === 'image'){
      return;
    }

    const columnName = column.name;
    if (columnName === this.sortColumn) {
      // Si se hace clic en la misma columna, cambiar la dirección de ordenación
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      // Si se hace clic en una nueva columna, cambiar a esa columna y establecer la dirección a ascendente
      this.sortColumn = columnName;
      this.sortDirection = 'asc';
    }

    // Realizar la ordenación
    this.sort();
  }

  // Función para ordenar los datos
  sort(): void {
    if(!this.data){
      return;
    }
    if (this.sortColumn) {
      this.data.sort((a, b) => {

        const valueA = a[this.sortColumn] || '';
        const valueB = b[this.sortColumn] || '';

        if (typeof valueA === 'string' && typeof valueB === 'string') {
          // Ordenación de cadena
          return this.sortDirection === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
        } else if (typeof valueA === 'number' && typeof valueB === 'number') {
          // Ordenación numérica
          return this.sortDirection === 'asc' ? valueA - valueB : valueB - valueA;
        } else {
          // Si no se puede comparar, mantener el orden original
          return 0;
        }
      });
    }
  }
}
