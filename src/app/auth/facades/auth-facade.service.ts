import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';
import { Observable, tap } from 'rxjs';

@Injectable()
export class AuthFacadeService {
  constructor(
    private authService: AuthService,
    private tokenService: TokenService
  ) {}

  public setLogin(code: string): Observable<any> {
    return this.authService
      .setLogin(code)
      .pipe(tap((res) => this.initToken(res['access_token'])));
  }

  public windowLocationToGithubAuth(): void {
    this.authService.windowLocationToGithubAuth();
  }

  private initToken(token: string): void {
    this.tokenService.setToken(token);
    this.tokenService.initExpiresAtKey();
  }
}
