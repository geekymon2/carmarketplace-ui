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
}

export interface BodyType {
  id: string;
  name: string;
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

  getBodyTypes(): Observable<any> {
    return this.http.get<any>(baseUrl + '/car/types');
  }

  getModels(make: string, type: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('make', make);
    params = params.append('type', type);
    return this.http.get<any>(baseUrl + '/car/models', { params });
  }
}
