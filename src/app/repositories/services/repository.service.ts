import {inject, Injectable} from '@angular/core';
import {BehaviorSubject, finalize, forkJoin, Observable} from "rxjs";
import {RepositoryApiService} from "../api/repository-api.service";
import {NgUnsubscriber} from "../../../shared/utils/unsubscriber";
import {RepositoryInfoType} from "../types/repository-info.type";

@Injectable()
export class RepositoryService extends NgUnsubscriber {
  private readonly repositoryApiService = inject(RepositoryApiService);

  private _isLoading$ = new BehaviorSubject(false);

  constructor() {
    super();
  }

  getRepositoryInfo$(owner: string, repo: string): Observable<RepositoryInfoType> {
    this._isLoading$.next(true);

    return forkJoin({
      repository: this.repositoryApiService.getRepository(owner, repo),
      repositoryReadme: this.repositoryApiService.getRepositoryReadme(owner, repo),
      repositoryCommits: this.repositoryApiService.getRepositoryCommits(owner, repo),
    }).pipe(
      finalize(() => this._isLoading$.next(false))
    )
  }

  get isLoading$(): Observable<boolean> {
    return this._isLoading$.asObservable();
  }
}
