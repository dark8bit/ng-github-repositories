import {Repository} from "../../../shared/interfaces/repository.interface";
import {Readme} from "../../../shared/interfaces/readme.interface";
import {Commit} from "../../../shared/interfaces/commit.interface";

export type RepositoryInfoType = {
  repository: Repository;
  repositoryReadme: Readme;
  repositoryCommits: Commit[];
}
