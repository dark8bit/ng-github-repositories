import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, switchMap } from 'rxjs';
import { AuthFacadeService } from './facades/auth-facade.service';
import { HTTP_PARAMS } from './enums/http-params.enum';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  constructor(
    private authFacade: AuthFacadeService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.queryParams
      .pipe(
        filter((params) => params && params[HTTP_PARAMS.CODE]),
        switchMap((params) => {
          const code = params[HTTP_PARAMS.CODE];

          return this.authFacade.setLogin(code);
        })
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
