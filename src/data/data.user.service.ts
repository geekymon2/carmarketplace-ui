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
    console.log('Called registerUser');

    let res: any = null;

    try {
      res = this.http.get<any>('http://wrong/register').pipe(
        catchError((err) => {
          console.log('There is an error');
          console.log(err);
          return err;
        })
      );

      res.subscribe((data: any) => console.log(data));
    } catch (err) {
      console.log(err);
    }
    return res;
  }
}
