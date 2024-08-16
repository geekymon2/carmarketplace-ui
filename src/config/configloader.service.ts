import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

interface Config {
  baseUrl: string;
  logLevel: string;
  production: string;
}

@Injectable({
  providedIn: 'root',
})
export class ConfigLoaderService {
  private configUrl = '/assets/config.json';
  private config: Config | undefined;

  constructor(private http: HttpClient) {}

  loadConfig(): Observable<Config> {
    console.debug('Loading Config');
    return this.http.get<Config>(this.configUrl);
  }

  getConfig(): Config | undefined {
    console.debug('Getting Config');
    return this.config;
  }

  setConfig(config: Config): void {
    console.info('API base url:' + config.baseUrl);
    this.config = config;
  }
}
