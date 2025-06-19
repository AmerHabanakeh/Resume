import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
// import 'remixicon/fonts/remixicon.css';
import { NgwWowModule } from 'ngx-wow';
import { provideHttpClient } from '@angular/common/http';
import { provideNetlifyLoader } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      NgwWowModule
    ),
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideNetlifyLoader('https://ahmad-alhamwi-portfolio.netlify.app'),
    provideRouter(routes)
  ]
};
