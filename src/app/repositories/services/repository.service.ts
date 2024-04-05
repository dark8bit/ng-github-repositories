import { inject, Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  finalize,
  forkJoin,
  Observable,
  of,
} from 'rxjs';
import { RepositoryApiService } from '../api/repository-api.service';
import { NgUnsubscriber } from '@shared/utils/unsubscriber';
import { RepositoryInfo } from '../interfaces/repository.info';

@Injectable()
export class RepositoryService extends NgUnsubscriber {
  private readonly repositoryApiService = inject(RepositoryApiService);

  private _isLoading$ = new BehaviorSubject(false);

  constructor() {
    super();
  }

  getRepositoryInfo$(owner: string, repo: string): Observable<RepositoryInfo> {
    this._isLoading$.next(true);

    const repositoryInfo$ = this.repositoryApiService
      .getRepositoryInfo(owner, repo)
      .pipe(catchError(() => of(null)));
    const repositoryReadme$ = this.repositoryApiService
      .getRepositoryReadme(owner, repo)
      .pipe(catchError(() => of(null)));
    const repositoryCommits$ = this.repositoryApiService
      .getRepositoryCommits(owner, repo)
      .pipe(catchError(() => []));

    return forkJoin({
      repositoryInfo: repositoryInfo$,
      repositoryReadme: repositoryReadme$,
      repositoryCommits: repositoryCommits$,
    }).pipe(finalize(() => this._isLoading$.next(false)));
  }

  get isLoading$(): Observable<boolean> {
    return this._isLoading$.asObservable();
  }
}
