import { Routes } from '@angular/router';
import { About } from './about/about';
import { Help } from './help/help';

export const routes: Routes = [
  { path: 'about', component: About },
  { path: 'help', component: Help },
];
