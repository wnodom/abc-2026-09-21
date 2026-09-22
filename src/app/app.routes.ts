import { Routes } from '@angular/router';
import { About } from './about/about';
import { Help } from './help/help';

export const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: About },
  { path: 'help', component: Help },
  { path: '**', redirectTo: 'help' },
];
