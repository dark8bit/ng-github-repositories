import { Injectable } from '@angular/core';
import { AuthApiService } from '../api/auth-api.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private authApiService: AuthApiService) {}

  public windowLocationToGithubAuth(): void {
    window.location.href = this.authApiService.authUrl;
  }

  public setLogin(code: string): Observable<any> {
    return this.authApiService.setLogin(code);
  }
}
