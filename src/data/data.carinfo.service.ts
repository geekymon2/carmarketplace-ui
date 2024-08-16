import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ApiBasePaths } from '../apis/apipaths';
import { Observable } from 'rxjs/internal/Observable';
import { ConfigLoaderService } from '../config/configloader.service';

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

@Injectable({
  providedIn: 'root',
})
export class CarInfoDataService {
  constructor(
    private http: HttpClient,
    private configService: ConfigLoaderService
  ) {}

  private baseUrl =
    this.configService.getConfig()?.baseUrl + ApiBasePaths.CAR_INFO_SERVICE;

  getMakes(): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/car/makes');
  }

  getBodyTypes(): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/car/types');
  }

  getModels(make: string, type: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('make', make);
    params = params.append('type', type);
    return this.http.get<any>(this.baseUrl + '/car/models', { params });
  }
}
