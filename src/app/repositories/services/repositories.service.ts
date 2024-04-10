import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  map,
  Observable,
  of,
  switchMap,
} from 'rxjs';
import { Repository } from '@shared/interfaces/repository.interface';
import { RepositoriesApiService } from '../api/repositories-api.service';
import { RepositorySearch } from '@app/repositories/interfaces/repository-search';
import { SharedHelperService } from '@shared/helpers/shared-helper.service';

@Injectable()
export class RepositoriesService {
  private _searchRepositoriesQuery$ = new BehaviorSubject<RepositorySearch>({
    q: '',
    language: null,
  });

  constructor(private repositoriesApiService: RepositoriesApiService) {}

  updateSearchRepositoriesQuery(params: RepositorySearch): void {
    this._searchRepositoriesQuery$.next(params);
  }

  /**
   * Получение списка репозиториев
   */
  getRepositories(): Observable<Repository[]> {
    return this._searchRepositoriesQuery$.asObservable().pipe(
      map((params) => SharedHelperService.filterNonNullValues(params)),
      switchMap((params: RepositorySearch) =>
        params.q || Object.keys(params).length > 1
          ? this.searchRepositories(params)
          : this.repositories$
      )
    );
  }

  /**
   * Поиск репозиториев
   * @param params - Параметры поиска
   * @private
   */
  private searchRepositories(
    params: RepositorySearch
  ): Observable<Repository[]> {
    const paramsString = SharedHelperService.getParamString(params);

    return this.repositoriesApiService
      .searchRepositories(paramsString)
      .pipe(catchError(() => of([])));
  }

  /**
   * Получение списка репозиториев (по-умолчанию)
   * @private
   */
  private get repositories$(): Observable<Repository[]> {
    return this.repositoriesApiService
      .getRepositories()
      .pipe(catchError(() => of([])));
  }
}
