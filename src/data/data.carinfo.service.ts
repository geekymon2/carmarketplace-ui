import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.development';
import { ApiBasePaths } from '../apis/ApiPaths';

export interface Make {
  id: string;
  isActive: boolean;
  age: number;
  name: string;
  gender: string;
  company: string;
  email: string;
  phone: string;
  disabled?: boolean;
}

const baseUrl = environment.baseUrl + ApiBasePaths.CAR_INFO_SERVICE;

@Injectable({
  providedIn: 'root'
})

export class CarInfoDataService {
  constructor(private http: HttpClient) { }

  getMakes(): Observable<any> {
    return this.http.get(baseUrl + '/car/makes');
  }
}
