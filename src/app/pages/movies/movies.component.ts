import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { fadeInOut, fadeInOutAndScale } from '../../core/shared/ts/animations';
import { MoviesService } from '../../core/services/movies.service';
import { Movie } from '../../core/models/movies.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  animations: [fadeInOut, fadeInOutAndScale]
})

export class MoviesComponent implements OnInit {
  isLoading$: Observable<boolean>; // Observable para controlar el estado de carga
  movies: Movie[] = []; // Arreglo para almacenar las películas obtenidas

  // Definición de columnas para la tabla de películas
  columns = [
    { name: 'Poster', label: 'Poster', type: 'image' },
    { name: 'Title', label: 'Nombre', type: 'text' },
    { name: 'Year', label: 'Estreno', type: 'text' }
  ];

  constructor(private _moviesService: MoviesService) {}

  ngOnInit(): void {
    // Asigna el Observable de isLoading del MoviesService al isLoading$ del componente
    this.isLoading$ = this._moviesService.isLoading$;
  }

  // Método para realizar una búsqueda de películas
  performSearch(query: any): void {
    this._moviesService.getMovies(query)
    .subscribe((resp: any) => {
      // Asigna las películas obtenidas al arreglo movies del componente
      this.movies = resp.Search;
    });
  }
}
