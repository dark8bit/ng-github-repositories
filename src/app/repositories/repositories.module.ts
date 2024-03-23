import { NgModule } from '@angular/core';
import {SharedModule} from "../../shared/shared.module";
import {RouterModule, Routes} from "@angular/router";
import {RepositoriesLayoutComponent} from "./components/repositories-layout/repositories-layout.component";
import {RepositoriesApiService} from "../../shared/api/repositories-api.service";
import {RepositoriesService} from "../../shared/services/repositories.service";
import {RepositoryApiService} from "../../shared/api/repository-api.service";
import {RepositoryService} from "../../shared/services/repository.service";

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
  declarations: [],
  providers: [...services],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [RouterModule]
})
export class RepositoriesModule { }
