import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment';
import { ApiBasePaths } from '../apis/apipaths';
import { Observable } from 'rxjs/internal/Observable';
import { ConfigService } from '../config/config.service';

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
  constructor(private http: HttpClient, private configService: ConfigService) {}

  private baseUrl = this.configService.apiUrl + ApiBasePaths.CAR_INFO_SERVICE;

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
