import { Component, inject } from '@angular/core';
import { RepositoriesService } from '../../services/repositories.service';
import { Observable } from 'rxjs';
import { Repository } from '@shared/interfaces/repository.interface';
import { RepositorySearch } from '@app/repositories/interfaces/repository-search';

@Component({
  selector: 'app-repositories-layout',
  templateUrl: './repositories-layout.component.html',
  styleUrl: './repositories-layout.component.scss',
})
export class RepositoriesLayoutComponent {
  private readonly repositoriesService = inject(RepositoriesService);

  public readonly searchRepositoriesQuery$ =
    this.repositoriesService.searchRepositoriesQuery$;
  public readonly repositories$: Observable<Repository[]> =
    this.repositoriesService.getRepositories();

  public updateSearchRepositoriesQuery(params: RepositorySearch): void {
    this.repositoriesService.updateSearchRepositoriesQuery(params);
  }
}
