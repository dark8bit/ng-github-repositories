import { InjectionToken, Provider } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { RepositoryService } from '../../services/repository.service';
import { RepositoryInfo } from '../../interfaces/repository.info';

export const REPOSITORY_DETAIL_INFO = new InjectionToken<
  Observable<RepositoryInfo>
>('A stream with repository detail information');

export const REPOSITORY_DETAIL_PROVIDERS: Provider[] = [
  {
    provide: REPOSITORY_DETAIL_INFO,
    deps: [ActivatedRoute, RepositoryService],
    useFactory: repositoryDetailFactory,
  },
];

export function repositoryDetailFactory(
  { params }: ActivatedRoute,
  repositoryService: RepositoryService
): Observable<RepositoryInfo> {
  return params.pipe(
    switchMap((params) => {
      const { owner, repo } = params;

      return repositoryService.getRepositoryInfo$(owner, repo);
    })
  );
}
