import { Component, inject } from '@angular/core';
import { RepositoriesService } from '../../services/repositories.service';
import { Observable, tap } from 'rxjs';
import { Repository } from '@shared/interfaces/repository.interface';

@Component({
  selector: 'app-repositories-layout',
  templateUrl: './repositories-layout.component.html',
  styleUrl: './repositories-layout.component.scss',
})
export class RepositoriesLayoutComponent {
  private readonly repositoryService = inject(RepositoriesService);

  public readonly repositories$: Observable<Repository[]> =
    this.repositoryService
      .getRepositories()
      .pipe(tap((res) => console.log(res)));

  public updateSearchRepositoriesQuery(params: string): void {
    this.repositoryService.updateSearchRepositoriesQuery(params);
  }
}
