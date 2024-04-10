import { inject, Injectable } from '@angular/core';
import { catchError, forkJoin, Observable, of } from 'rxjs';
import { RepositoryApiService } from '../api/repository-api.service';
import { NgUnsubscriber } from '@shared/utils/unsubscriber';
import { RepositoryInfo } from '../interfaces/repository.info';

@Injectable()
export class RepositoryService extends NgUnsubscriber {
  private readonly repositoryApiService = inject(RepositoryApiService);

  constructor() {
    super();
  }

  /**
   * Получить полную информацию о репозитории
   * @param owner - владелец репозитория
   * @param repo - имя репозитория
   */
  getRepositoryInfo$(owner: string, repo: string): Observable<RepositoryInfo> {
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
    });
  }
}
