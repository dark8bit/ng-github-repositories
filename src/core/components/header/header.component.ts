import { Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { TokenFacadeService } from '@app/auth/facades/token-facade.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIcon, MatIconButton, MatToolbar, RouterLink, NgIf],
  providers: [TokenFacadeService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private readonly tokenFacade = inject(TokenFacadeService);

  public isAuth = this.tokenFacade.isAuth;

  public onLogout(): void {
    this.tokenFacade.localStorageClear();
  }
}
