import {Repository} from "./repository.interface";

export interface SearchRepositoriesResponse {
  total_count: number;
  incomplete_results: boolean;
  items: Repository[];
}
