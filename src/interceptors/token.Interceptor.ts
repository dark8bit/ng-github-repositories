import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { TokenService } from '../app/auth/services/token.service';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenService = inject(TokenService);

  if (tokenService.authToken) {
    req = addToken(req, tokenService.authToken);
  }

  return next(req);
};

function addToken(request: HttpRequest<any>, token: string) {
  return request.clone({
    setHeaders: {
      accept: 'application/json',
      access_token: `${token}`,
      token_type: 'bearer',
    },
  });
}
