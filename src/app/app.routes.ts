import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  {
    path: 'about',
    loadComponent: () => import('./about/about'),
  },
  { path: 'help', loadComponent: () => import('./help/help') },
  { path: '**', redirectTo: 'help' },
];
