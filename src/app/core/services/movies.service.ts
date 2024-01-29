// Importaciones necesarias de Angular y otros módulos
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, finalize } from 'rxjs';
import { MoviesModel } from '../models/movies.model';
import { environment } from 'src/environments/environment';
import { delay } from 'rxjs/operators'; // Se corrigió la importación de 'delay'

// URL base de la API para obtener películas
const API_MOVIES_URL = environment.apiUrl;

/**
 * Servicio que proporciona métodos para obtener información sobre películas.
 */
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  // Sujeto (Subject) para gestionar el estado de carga de datos
  isLoadingSubject: BehaviorSubject<boolean>;
  // Observable que otros componentes pueden observar para conocer el estado de carga de datos
  isLoading$: Observable<boolean>;

  /**
   * Constructor del servicio.
   * @param http Módulo HttpClient para realizar peticiones HTTP
   */
  constructor(private http: HttpClient) {
    // Inicialización del BehaviorSubject y del Observable
    this.isLoadingSubject = new BehaviorSubject<boolean>(false);
    this.isLoading$ = this.isLoadingSubject.asObservable();
  }

  /**
   * Método para obtener películas desde la API.
   * @param search Término de búsqueda opcional para filtrar películas
   * @returns Un Observable que emite el modelo de películas
   */
  getMovies(search: string = ''): Observable<MoviesModel> {
    // Indicar que la carga de datos está en curso
    this.isLoadingSubject.next(true);

    // Realizar la petición HTTP para obtener películas
    return this.http.get<MoviesModel>(`${API_MOVIES_URL}&s=${search}`)
      .pipe(
        delay(3000), // Simula el tiempo de ejecución como si fuera una petición con muchos datos
        finalize(() => this.isLoadingSubject.next(false))
      );
  }
}
