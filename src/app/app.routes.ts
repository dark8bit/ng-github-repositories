import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'repositories',
  },
  {
    path: 'repositories',
    loadChildren: () => import('./repositories/repositories.module').then(m => m.RepositoriesModule)
  },
  {
    path: '**',
    redirectTo: '/',
  },
];
