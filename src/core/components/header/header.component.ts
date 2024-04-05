import { Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatToolbar } from '@angular/material/toolbar';
import { Router, RouterLink } from '@angular/router';
import { TokenService } from '@app/auth/services/token.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIcon, MatIconButton, MatToolbar, RouterLink, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private readonly tokenService = inject(TokenService);
  private readonly router = inject(Router);

  public isAuth = this.tokenService.isAuthenticated;

  public onLogout(): void {
    this.tokenService.localStorageClear();
    this.router.navigate(['/', 'auth']);
  }
}
