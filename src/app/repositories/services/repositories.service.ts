import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, of, switchMap } from 'rxjs';
import { Repository } from '@shared/interfaces/repository.interface';
import { RepositoriesApiService } from '../api/repositories-api.service';

@Injectable()
export class RepositoriesService {
  private _searchRepositoriesQuery$ = new BehaviorSubject('');

  constructor(private repositoriesApiService: RepositoriesApiService) {}

  updateSearchRepositoriesQuery(params: string): void {
    this._searchRepositoriesQuery$.next(params);
  }

  getRepositories(): Observable<Repository[]> {
    const searchRepositories$ = (params: string) =>
      this.repositoriesApiService
        .searchRepositories(params)
        .pipe(catchError(() => of([])));
    const getRepositories$ = this.repositoriesApiService
      .getRepositories()
      .pipe(catchError(() => of([])));

    return this._searchRepositoriesQuery$
      .asObservable()
      .pipe(
        switchMap((params) =>
          params ? searchRepositories$(params) : getRepositories$
        )
      );
  }
}
