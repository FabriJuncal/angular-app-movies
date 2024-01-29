// Importaciones necesarias de Angular y otros módulos
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, delay, finalize, of } from 'rxjs';
import { MainModel } from '../models/main.model';

/**
 * Servicio que proporciona métodos para interactuar con una API.
 */
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // Observable que indica si la API está cargando
  isLoading$: Observable<boolean>;
  // Sujeto (Subject) para gestionar el estado de carga
  isLoadingSubject: BehaviorSubject<boolean>;

  /**
   * Constructor del servicio.
   */
  constructor() {
    // Inicialización del sujeto y el observable
    this.isLoadingSubject = new BehaviorSubject<boolean>(false);
    this.isLoading$ = this.isLoadingSubject.asObservable();
  }

  /**
   * Método para obtener el contenido principal de la API.
   * @returns Un observable con el contenido principal.
   */
  getMainContent(): Observable<MainModel> {
    // Indicar que la API está cargando
    this.isLoadingSubject.next(true);

    // Simulación de una petición a la API con un retardo de 3 segundos
    return of({
      title: 'Texto principal',
      textSecondary: 'Texto secundario texto secundario texto secundario texto secundario texto secundario texto secundario',
      textinformation: 'Texto sobre otro elemento'
    }).pipe(
      delay(3000),
      // Finalizar indicando que la carga ha terminado
      finalize(() => this.isLoadingSubject.next(false))
    );
  }
}
