import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { Observable } from 'rxjs';
import { MainModel } from '../../core/models/main.model';
import { fadeInOut } from '../../core/shared/ts/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [fadeInOut]
})
export class HomeComponent implements OnInit {
  isLoading$: Observable<boolean>;
  mainContent: MainModel;

  constructor(
    private _apiService: ApiService,
  ) {}

  ngOnInit(): void {
    this.isLoading$ = this._apiService.isLoading$;
    this.getMainContent();
  }

  getMainContent(){
    this._apiService.getMainContent().subscribe((data) => {
      this.mainContent = data;
    })
  }

}
