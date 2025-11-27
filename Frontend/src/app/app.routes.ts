import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { SearchShow } from './pages/search-show/search-show';
import { Episodes } from './pages/episodes/episodes';

//make paths for the different web pages
export const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'home', component: Home
  },
  {
    path: 'search-show/:show', component: SearchShow
  },
  {
    path: 'episodes/:id', component: Episodes
  },

];
