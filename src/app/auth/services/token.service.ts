import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private tokenKey = 'access_token';
  private expiresAtKey = 'expires_at';

  constructor() {}

  public get authToken(): string {
    const token = localStorage.getItem(this.tokenKey) || '';

    return `${token}`;
  }

  public get isAuthenticated(): boolean {
    return this.authToken !== null && this.isExpiresAt();
  }

  public setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  localStorageClear(): void {
    localStorage.clear();
  }

  public initExpiresAtKey(): void {
    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + 24);

    localStorage.setItem(this.expiresAtKey, expiresAt.toString());
  }

  public isExpiresAt(): boolean {
    const expiresAt = localStorage.getItem(this.expiresAtKey);
    const isExpiresAt = expiresAt ? new Date(expiresAt) : 0;

    return new Date() < isExpiresAt;
  }
}
