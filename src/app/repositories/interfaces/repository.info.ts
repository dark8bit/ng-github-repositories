import { Repository } from '@shared/interfaces/repository.interface';
import { Readme } from '@shared/interfaces/readme.interface';
import { Commit } from '@shared/interfaces/commit.interface';

export interface RepositoryInfo {
  repositoryInfo: Repository | null;
  repositoryReadme: Readme | null;
  repositoryCommits: Commit[];
}
