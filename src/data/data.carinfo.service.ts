import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment.development';
import { ApiBasePaths } from '../apis/apipaths';
import { Observable } from 'rxjs/internal/Observable';

export interface Make {
  id: string;
  name: string;
  country: string;
}

export interface Model {
  id: string;
  name: string;
  country: string;
}

const baseUrl = environment.baseUrl + ApiBasePaths.CAR_INFO_SERVICE;

@Injectable({
  providedIn: 'root',
})
export class CarInfoDataService {

  constructor(private http: HttpClient) {}

  getMakes(): Observable<any> {
    return this.http.get<any>(baseUrl + '/car/makes');
  }

  getModels(make: any): Observable<any> {
    const params = new HttpParams({ fromString: 'make=' + make + '&type=SUV' });
    return this.http.get<any>(baseUrl + '/car/models', { params });
  }
}
