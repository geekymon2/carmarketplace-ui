import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ApiBasePaths } from '../apis/apipaths';
import { Observable } from 'rxjs/internal/Observable';
import { ConfigLoaderService } from '../config/configloader.service';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  private baseUrl =
    this.configService.getConfig()?.baseUrl + ApiBasePaths.USER_SERVICE;

  constructor(
    private http: HttpClient,
    private configService: ConfigLoaderService
  ) {}

  registerUser(data: any): Observable<any> {
    let res: any = null;
    try {
      let params = new HttpParams();
      params = params.append('firstname', data.firstName);
      params = params.append('lastname', data.lastName);
      params = params.append('email', data.email);
      params = params.append('password', data.password);

      res = this.http.post<any>(
        this.baseUrl + '/user/register',
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

  authenticateUser(data: any): Observable<any> {
    let res: any = null;
    try {
      let params = new HttpParams();
      params = params.append('email', data.email);
      params = params.append('password', data.password);

      res = this.http.post<any>(
        this.baseUrl + '/user/authenticate',
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
