import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, finalize } from 'rxjs';
import { MoviesModel } from '../models/movies.model';
import { environment } from 'src/environments/environment';
import { delay } from 'rxjs';

const API_MOVIES_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  isLoading$: Observable<boolean>;
  isLoadingSubject: BehaviorSubject<boolean>

  constructor(private http: HttpClient) {
    this.isLoadingSubject = new BehaviorSubject<boolean>(false);
    this.isLoading$ = this.isLoadingSubject.asObservable();
  }

  getMovies(search: string = ''): Observable<MoviesModel>{
    this.isLoadingSubject.next(true);

    return this.http.get<MoviesModel>(`${API_MOVIES_URL}&s=${search}`)
    .pipe(
      delay(3000), // Se imita el tiempo de ejecución como si fuera una petición con muchos datos
      finalize(() => this.isLoadingSubject.next(false))
    );
  }
}
