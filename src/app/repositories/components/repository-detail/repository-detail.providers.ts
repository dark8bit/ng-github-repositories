import {InjectionToken, Provider} from "@angular/core";
import {Observable, switchMap} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {RepositoryService} from "../../services/repository.service";
import {RepositoryInfoType} from "../../types/repository-info.type";

export const REPOSITORY_DETAIL_INFO = new InjectionToken<Observable<RepositoryInfoType>>('A stream with repository detail information');

export const REPOSITORY_DETAIL_PROVIDERS: Provider[] = [
  {
    provide: REPOSITORY_DETAIL_INFO,
    deps: [ActivatedRoute, RepositoryService],
    useFactory: repositoryDetailFactory
  }
];

export function repositoryDetailFactory({params}: ActivatedRoute, repositoryService: RepositoryService): Observable<RepositoryInfoType> {
  return params.pipe(
    switchMap(params => {
      const {owner, repo} = params;

      return repositoryService.getRepositoryInfo$(owner, repo);
    })
  )
}
