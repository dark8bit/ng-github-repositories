import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, switchMap, takeUntil } from 'rxjs';
import { AuthFacadeService } from './facades/auth-facade.service';
import { HTTP_PARAMS } from './enums/http-params.enum';
import { NgUnsubscriber } from '@shared/utils/unsubscriber';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent extends NgUnsubscriber {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authFacade: AuthFacadeService
  ) {
    super();

    this.initLogin();
  }

  private initLogin() {
    this.route.queryParams
      .pipe(
        filter((params) => params && params[HTTP_PARAMS.CODE]),
        switchMap((params) => {
          const code = params[HTTP_PARAMS.CODE];

          return this.authFacade.setLogin(code);
        }),
        takeUntil(this.ngUnsubscribe$$)
      )
      .subscribe({
        next: () => this.router.navigate(['/', 'repositories']),
        error: (err) => console.error(err),
      });
  }

  public onLogin(): void {
    this.authFacade.windowLocationToGithubAuth();
  }
}
