import { Injectable } from '@angular/core';
import { ApiBasePaths } from '../apis/apipaths';
import { HttpClient } from '@angular/common/http';
import { ConfigLoaderService } from '../config/configloader.service';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private baseUrl =
    this.configService.getConfig()?.baseUrl + ApiBasePaths.NOTIFICATION_SERVICE;

  constructor(
    private http: HttpClient,
    private configService: ConfigLoaderService
  ) {}

  sendResetEmail() {
    let res: any = null;
    try {
      res = this.http.post<any>(this.baseUrl + '/resetemail', { body: '' });
      return res;
    } catch (err) {
      console.error('Exception while calling sendResetEmail:', err);
    }
  }
}
