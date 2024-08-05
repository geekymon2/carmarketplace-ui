import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment.development';
import { ApiBasePaths } from '../apis/apipaths';
import { Observable } from 'rxjs/internal/Observable';

const baseUrl = environment.baseUrl + ApiBasePaths.USER_SERVICE;

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  constructor(private http: HttpClient) {}

  registerUser(data: any): Observable<any> {
    let res: any = null;
    try {
      let params = new HttpParams();
      params = params.append('firstname', data.firstName);
      params = params.append('lastname', data.lastName);
      params = params.append('email', data.email);
      params = params.append('password', data.password);

      res = this.http.post<any>(
        baseUrl + '/user/register',
        { body: '' },
        {
          params: params,
        }
      );

      res.subscribe((data: any) => console.log(data));
    } catch (err) {
      console.log(err);
    }
    return res;
  }
}
