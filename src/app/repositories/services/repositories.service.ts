import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  filter,
  finalize,
  map,
  Observable,
  of,
  switchMap,
} from 'rxjs';
import { Repository } from '@shared/interfaces/repository.interface';
import { RepositoriesApiService } from '../api/repositories-api.service';
import { RepositorySearch } from '@app/repositories/interfaces/repository-search';
import { SharedHelperService } from '@shared/helpers/shared-helper.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ROUTES_PATH } from '@app/enums/routes-path.enum';
import { HTTP_PARAMS } from '@app/auth/enums/http-params.enum';

@Injectable()
export class RepositoriesService {
  private _searchRepositoriesQuery$ = new BehaviorSubject<RepositorySearch>({
    q: this.route.snapshot.queryParams[HTTP_PARAMS.Q] ?? '',
    language: this.route.snapshot.queryParams[HTTP_PARAMS.LANGUAGE] ?? null,
  });

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private repositoriesApiService: RepositoriesApiService
  ) {}

  /**
   * Получение параметров поиска
   */
  public get searchRepositoriesQuery$(): Observable<RepositorySearch> {
    return this._searchRepositoriesQuery$.asObservable();
  }

  /**
   * Обновление параметров поиска
   * @param params - Параметры поиска
   */
  public updateSearchRepositoriesQuery(params: RepositorySearch): void {
    this._searchRepositoriesQuery$.next(params);
  }

  /**
   * Получение списка репозиториев
   */
  public getRepositories(): Observable<Repository[]> {
    return this._searchRepositoriesQuery$.asObservable().pipe(
      filter((params) => !!params),
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

    return this.repositoriesApiService.searchRepositories(paramsString).pipe(
      catchError(() => of([])),
      finalize(() => this.locationGoUrlTree(params))
    );
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

  /**
   * Добавляем параметры поиска в урл
   * @param params - параметры поиска
   * @private
   */
  private locationGoUrlTree(params: RepositorySearch): void {
    const urlTree = this.router.createUrlTree([ROUTES_PATH.REPOSITORIES], {
      relativeTo: this.route,
      queryParams: params,
      queryParamsHandling: 'merge',
    });

    this.location.go(urlTree.toString());
  }
}
