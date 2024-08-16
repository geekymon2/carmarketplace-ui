import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { httperrorInterceptor } from './common/httperror.interceptor';
import { ConfigLoaderService } from '../config/configloader.service';
import { firstValueFrom } from 'rxjs';

export const appConfig: ApplicationConfig = {
  providers: [
    ConfigLoaderService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [ConfigLoaderService],
      multi: true,
    },
    provideRouter(routes),
    provideHttpClient(withInterceptors([httperrorInterceptor])),
  ],
};

function initializeApp(configService: ConfigLoaderService) {
  console.debug('Initializing ConfigLoader');
  return () =>
    firstValueFrom(configService.loadConfig())
      .then((config) => configService.setConfig(config))
      .catch((err) => {
        console.error('Could not load config:', err);
      });
}
