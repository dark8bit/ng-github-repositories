import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NgUnsubscriber} from "../../../../shared/utils/unsubscriber";
import {AsyncPipe, NgFor, NgIf} from "@angular/common";
import {SharedModule} from "../../../../shared/shared.module";
import {RepositoryService} from "../../../../shared/services/repository.service";
import {MatProgressSpinner} from "@angular/material/progress-spinner";

@Component({
  selector: 'app-repository-detail',
  standalone: true,
  imports: [
    AsyncPipe,
    NgFor,
    NgIf,
    SharedModule,
    MatProgressSpinner
  ],
  templateUrl: './repository-detail.component.html',
  styleUrl: './repository-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RepositoryDetailComponent extends NgUnsubscriber implements OnInit {
  public readonly readme$ = this.repositoryService.repositoryReadme$;
  public readonly repository$ = this.repositoryService.repository$;
  public readonly commits$ = this.repositoryService.commits$;
  public readonly isLoading$ = this.repositoryService.isLoading$;

  constructor(
    private repositoryService: RepositoryService,
    private route: ActivatedRoute,
  ) {
    super();
  }

  ngOnInit(): void {
    this.getRepositoryInfo();
  }

  private getRepositoryInfo(): void {
    const {owner, repo} = this.route.snapshot.params;

    this.repositoryService.getRepositoryInfo(owner, repo);
  }
}
