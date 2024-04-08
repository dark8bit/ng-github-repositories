import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { TokenService } from '../services/token.service';

export const authGuard: CanActivateFn = (route, state) => {
  const tokenService = inject(TokenService);

  if (!tokenService.isAuthenticated) {
    inject(Router).navigate(['/', 'auth']);
    return false;
  }

  return true;
};
