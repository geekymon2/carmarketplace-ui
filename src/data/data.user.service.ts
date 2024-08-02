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

const baseUrl = environment.baseUrl + ApiBasePaths.USER_SERVICE;

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  constructor(private http: HttpClient) {}

  registerUser(): Observable<any> {
    return this.http.get<any>(baseUrl + '/register');
  }
}
