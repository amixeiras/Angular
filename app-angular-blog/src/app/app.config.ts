import { ApplicationConfig } from '@angular/core';
import { provideRouter, withRouterConfig, RouteReuseStrategy, BaseRouteReuseStrategy } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export class CustomRouteReuseStrategy extends BaseRouteReuseStrategy {
  override shouldReuseRoute(): boolean {
    return false; // Força a destruição e recriação do componente
  }
}

export const appConfig: ApplicationConfig = {
  providers:
    [
      provideRouter(
        routes,
        withRouterConfig({
          onSameUrlNavigation: 'reload'
        })
      ),
      // Registramos a nossa estratégia customizada globalmente
      { provide: RouteReuseStrategy, useClass: CustomRouteReuseStrategy },
      provideClientHydration()
    ]
};
