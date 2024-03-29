import {Routes} from '@angular/router';
import {authGuard} from "./auth/guards/authGuard";
import {ROUTES_PATH} from "./enums/routes-path.enum";

export const routes: Routes = [
  {
    path: ROUTES_PATH.MAIN,
    pathMatch: 'full',
    redirectTo: 'repositories',
  },
  {
    path: ROUTES_PATH.REPOSITORIES,
    canActivate: [authGuard],
    loadChildren: () => import('./repositories/repositories.module').then(m => m.RepositoriesModule)
  },
  {
    path: ROUTES_PATH.AUTH,
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: '**',
    redirectTo: '/',
  },
];
