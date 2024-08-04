import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment.development';
import { ApiBasePaths } from '../apis/apipaths';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/operators';

const baseUrl = environment.baseUrl + ApiBasePaths.USER_SERVICE;

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  constructor(private http: HttpClient) {}

  registerUser(body: any): Observable<any> {
    let res: any = null;
    try {
      res = this.http.post<any>(baseUrl + '/register', body);

      res.subscribe((data: any) => console.log(data));
    } catch (err) {
      console.log(err);
    }
    return res;
  }
}
