import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private config: any;

  constructor(private http: HttpClient) {}

  async loadConfig(environment: string): Promise<void> {
    try {
      const data = await lastValueFrom(this.http.get(`/assets/config.${environment}.json`));
      this.config = data;
    } catch {
      console.error(`Could not load config for ${environment}`);
    }
  }

  get apiUrl(): string {
    return this.config?.apiUrl || '';
  }
}
