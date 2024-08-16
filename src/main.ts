import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { ConfigService } from './config/config.service';

fetch(`/assets/config.json`)
  .then((response) => response.json())
  .then((config) => {
    platformBrowserDynamic([{ provide: 'CONFIG', useValue: config }]);
    bootstrapApplication(AppComponent, appConfig).catch((err) =>
      console.error(err)
    );
    console.log('API base url:' + config.baseUrl);
  });
