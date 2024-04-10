import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { Repository } from '@shared/interfaces/repository.interface';
import { SearchRepositoriesResponse } from '@shared/interfaces/search-repositories-response.interface';
import { environment } from '@environments/environment';

@Injectable()
export class RepositoriesApiService {
  private readonly baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  /**
   * Получение списка репозиториев (по-умолчанию)
   */
  getRepositories(): Observable<Repository[]> {
    const url = this.baseUrl + '/repositories';

    return this.http.get<Repository[]>(url);
  }

  /**
   * Получение репозиториев по параметрам
   * @param params - параметры запроса
   */
  searchRepositories(params: string): Observable<Repository[]> {
    const url = `${this.baseUrl}/search/repositories?${params}`;

    return this.http.get<SearchRepositoriesResponse>(url).pipe(
      map((res) => res.items),
      catchError(() => of([]))
    );
  }
}
