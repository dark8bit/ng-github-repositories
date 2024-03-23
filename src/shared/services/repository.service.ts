import {inject, Injectable} from '@angular/core';
import {BehaviorSubject, finalize, forkJoin, Observable, retry, takeUntil} from "rxjs";
import {Repository} from "../interfaces/repository.interface";
import {Readme} from "../interfaces/readme.interface";
import {RepositoryApiService} from "../api/repository-api.service";
import {Commit} from "../interfaces/commit.interface";
import {NgUnsubscriber} from "../utils/unsubscriber";

@Injectable()
export class RepositoryService extends NgUnsubscriber {
  private repositoryApiService = inject(RepositoryApiService);

  private _repository$ = new BehaviorSubject<Repository | null>(null);
  private _repositoryReadme$ = new BehaviorSubject<Readme | null>(null);
  private _commits$ = new BehaviorSubject<Commit[]>([]);
  private _isLoading$ = new BehaviorSubject(false);

  constructor() {
    super();
  }

  getRepositoryInfo(owner: string, repo: string): void {
    this._isLoading$.next(true);

    forkJoin([
      this.repositoryApiService.getRepository(owner, repo),
      this.repositoryApiService.getRepositoryReadme(owner, repo),
      this.repositoryApiService.getRepositoryCommits(owner, repo),
    ])
      .pipe(
        finalize(() => {
          this._isLoading$.next(false);
        }),
        takeUntil(this.ngUnsubscribe$$),
      )
      .subscribe(([repository, readme, commits]) => {
        this._repository$.next(repository);
        this._repositoryReadme$.next(readme);
        this._commits$.next(commits);
      })
  }

  get repository$(): Observable<Repository | null> {
    return this._repository$.asObservable();
  }

  get repositoryReadme$(): Observable<Readme | null> {
    return this._repositoryReadme$.asObservable();
  }

  get commits$(): Observable<Commit[]> {
    return this._commits$.asObservable();
  }

  get isLoading$(): Observable<boolean> {
    return this._isLoading$.asObservable();
  }
}
