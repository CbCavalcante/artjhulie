// src/app/app.routes.ts

import { Routes } from '@angular/router';
import { Home } from './pages/home/home.component';

export const routes: Routes = [
  
  // 1. A sua rota principal (é a única que precisamos)
  { 
    path: '', 
    component: Home
  },

  // 2. REMOVA A ROTA CORINGA DAQUI
  // { path: '**', redirectTo: '', pathMatch: 'full' } <-- APAGUE ESTA PARTE
  { 
    path: '**', // O coringa que pega TUDO
    component: Home, // Carregue a Home (NÃO use redirectTo)
  }
];