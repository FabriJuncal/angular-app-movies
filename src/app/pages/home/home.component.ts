import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { Observable } from 'rxjs';
import { MainModel } from '../../core/models/main.model';
import { fadeInOut } from '../../core/shared/ts/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [fadeInOut]  // Agregamos la animación al componente
})
export class HomeComponent implements OnInit {
  isLoading$: Observable<boolean>; // Observable para controlar el estado de carga
  mainContent: MainModel; // Modelo para almacenar el contenido principal

  constructor(private _apiService: ApiService) {}

  ngOnInit(): void {
    // Asigna el Observable de isLoading del ApiService al isLoading$ del componente
    this.isLoading$ = this._apiService.isLoading$;

    // Inicia la obtención del contenido principal al inicializar el componente
    this.getMainContent();
  }

  // Método para obtener el contenido principal a través del ApiService
  getMainContent() {
    this._apiService.getMainContent().subscribe((data) => {
      // Asigna los datos obtenidos al modelo mainContent del componente
      this.mainContent = data;
    });
  }
}
