// src/app/app.config.ts

import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

// ESTE É O IMPORT CORRETO DAS SUAS ROTAS
import { routes } from './app.component.routes'; 

import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    
    // Apenas o provideRouter limpo.
    // Isso vai parar TODOS os erros de compilação TS2305.
    provideRouter(routes), 
    
    provideHttpClient()
  ]
};