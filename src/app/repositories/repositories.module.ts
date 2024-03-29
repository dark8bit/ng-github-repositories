import {NgModule} from '@angular/core';
import {SharedModule} from "../../shared/shared.module";
import {RouterModule, Routes} from "@angular/router";
import {RepositoriesLayoutComponent} from "./components/repositories-layout/repositories-layout.component";
import {RepositoriesApiService} from "./api/repositories-api.service";
import {RepositoriesService} from "./services/repositories.service";
import {RepositoryApiService} from "./api/repository-api.service";
import {RepositoryService} from "./services/repository.service";
import {RepositoriesComponent} from "./components/repositories/repositories.component";
import {AsyncPipe} from "@angular/common";
import {SearchComponent} from "../../shared/components/search/search.component";
import {RepositoryDetailComponent} from "./components/repository-detail/repository-detail.component";

export const routes: Routes = [
  {
    path: '',
    component: RepositoriesLayoutComponent,
  },
  {
    path: ':owner/:repo',
    loadComponent: () => import('./components/repository-detail/repository-detail.component').then(c => c.RepositoryDetailComponent)
  }
]

const services = [
  RepositoriesApiService, RepositoriesService, RepositoryApiService, RepositoryService
]

@NgModule({
  declarations: [RepositoriesComponent, RepositoriesLayoutComponent, RepositoryDetailComponent],
  providers: [...services],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    AsyncPipe,
    SearchComponent,
  ],
  exports: [RouterModule]
})
export class RepositoriesModule { }
