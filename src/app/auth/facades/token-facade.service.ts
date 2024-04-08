import { Injectable } from '@angular/core';
import { TokenService } from '@app/auth/services/token.service';
import { Router } from '@angular/router';

@Injectable()
export class TokenFacadeService {
  isAuth = this.tokenService.isAuthenticated;

  constructor(
    private router: Router,
    private tokenService: TokenService
  ) {}

  public localStorageClear(): void {
    this.tokenService.localStorageClear();
    this.router.navigate(['/', 'auth']);
  }
}
