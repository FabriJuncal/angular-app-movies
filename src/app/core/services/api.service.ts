import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, delay, finalize, of } from 'rxjs';
import { MainModel } from '../models/main.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  isLoading$: Observable<boolean>;
  isLoadingSubject: BehaviorSubject<boolean>

  constructor() {
    this.isLoadingSubject = new BehaviorSubject<boolean>(false);
    this.isLoading$ = this.isLoadingSubject.asObservable();
  }

  getMainContent(): Observable<MainModel>{
    this.isLoadingSubject.next(true);
    return of({
      title: 'Texto principal',
      textSecondary: 'Texto secundario texto secundario texto secundario texto secundario texto secundario texto secundario',
      textinformation: 'Texto sobre otro elemento'
    })
    .pipe(
      delay(3000), // Se imita el tiempo de ejecución como si fuera una petición
      finalize(() => this.isLoadingSubject.next(false))
    );
  }
}
