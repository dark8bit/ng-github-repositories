import {Component, inject} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {SearchComponent} from "../../../../shared/components/search/search.component";
import {RepositoriesComponent} from "../repositories/repositories.component";
import {RepositoriesService} from "../../../../shared/services/repositories.service";
import {Observable, tap} from "rxjs";
import {Repository} from "../../../../shared/interfaces/repository.interface";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-repositories-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    SearchComponent,
    RepositoriesComponent,
    AsyncPipe
  ],
  templateUrl: './repositories-layout.component.html',
  styleUrl: './repositories-layout.component.scss'
})
export class RepositoriesLayoutComponent {
  private repositoryService = inject(RepositoriesService);

  public repositories$: Observable<Repository[]> = this.repositoryService.getRepositories().pipe(tap(res => console.log(res)));

  public updateSearchRepositoriesQuery(params: string): void {
    this.repositoryService.updateSearchRepositoriesQuery(params)
  }
}
