import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'market',
    loadComponent: () => import('./pages/market/market.component').then(m => m.MarketComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
