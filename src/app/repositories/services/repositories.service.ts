import {inject, Injectable} from '@angular/core';
import {BehaviorSubject, map, Observable, switchMap} from "rxjs";
import {Repository} from "../../../shared/interfaces/repository.interface";
import {RepositoriesApiService} from "../api/repositories-api.service";
import {Readme} from "../../../shared/interfaces/readme.interface";

@Injectable()
export class RepositoriesService {
  private _searchRepositoriesQuery$ = new BehaviorSubject('');

  constructor(
    private repositoriesApiService: RepositoriesApiService
  ) {
  }

  updateSearchRepositoriesQuery(params: string): void {
    this._searchRepositoriesQuery$.next(params);
  }

  getRepositories(): Observable<Repository[]> {
    return this._searchRepositoriesQuery$.asObservable().pipe(
      switchMap(params => params ? this.repositoriesApiService.searchRepositories(params) : this.repositoriesApiService.getRepositories())
    );
  }

}
