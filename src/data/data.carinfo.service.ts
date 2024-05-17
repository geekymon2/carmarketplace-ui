import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.development';
import { ApiBasePaths } from '../apis/apipaths';

export interface Make {
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
    return this.http.get(baseUrl + '/car/makes');
  }
}
