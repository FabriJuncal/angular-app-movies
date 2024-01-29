import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { Observable } from 'rxjs';
import { MainModel } from '../../core/models/main.model';
import { fadeInOut, fadeInOutAndScale } from '../../core/shared/ts/animations';
import { MoviesService } from '../../core/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  animations: [fadeInOut, fadeInOutAndScale]
})

export class MoviesComponent implements OnInit {
  isLoading$: Observable<boolean>;
  movies: any[] = [];

  columns = [
    { name: 'Poster', label: 'Poster', type: 'image' },
    { name: 'Title', label: 'Nombre', type: 'text' },
    { name: 'Year', label: 'Estreno', type: 'text' }
  ];

  constructor(
    private _moviesService: MoviesService,
  ) {}

  ngOnInit(): void {
    this.isLoading$ = this._moviesService.isLoading$;
  }

  performSearch(query: any): void {
    this._moviesService.getMovies(query)
    .subscribe((resp: any) => {
      this.movies = resp.Search;
    })
  }

}
