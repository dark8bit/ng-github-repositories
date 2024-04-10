import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import {
  REPOSITORY_DETAIL_INFO,
  REPOSITORY_DETAIL_PROVIDERS,
} from './repository-detail.providers';
import { Observable } from 'rxjs';
import { RepositoryInfo } from '../../interfaces/repository.info';

@Component({
  selector: 'app-repository-detail',
  providers: [REPOSITORY_DETAIL_PROVIDERS],
  templateUrl: './repository-detail.component.html',
  styleUrl: './repository-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RepositoryDetailComponent {
  constructor(
    @Inject(REPOSITORY_DETAIL_INFO)
    readonly repositoryDetail$: Observable<RepositoryInfo>
  ) {}
}
