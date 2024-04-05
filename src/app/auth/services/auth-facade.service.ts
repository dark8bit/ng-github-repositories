import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { TokenService } from './token.service';
import { Observable, tap } from 'rxjs';

@Injectable()
export class AuthFacadeService {
  constructor(
    private authService: AuthService,
    private tokenService: TokenService
  ) {}

  public setLogin(code: string): Observable<any> {
    return this.authService.setLogin(code).pipe(
      tap((res) => {
        this.tokenService.setToken(res['access_token']);
        this.tokenService.initExpiresAtKey();
      })
    );
  }

  public windowLocationToGithubAuth(): void {
    this.authService.windowLocationToGithubAuth();
  }
}
