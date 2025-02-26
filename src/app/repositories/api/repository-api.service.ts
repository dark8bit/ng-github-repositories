import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Repository } from '@shared/interfaces/repository.interface';
import { Readme } from '@shared/interfaces/readme.interface';
import { Commit } from '@shared/interfaces/commit.interface';

@Injectable()
export class RepositoryApiService {
  private readonly baseUrl = environment.baseUrl + '/repos';

  constructor(private http: HttpClient) {}

  /**
   * Получение информации о репозитории
   * @param owner - имя пользователя
   * @param repo - название репозитория
   */
  getRepositoryInfo(owner: string, repo: string): Observable<Repository> {
    const url = `${this.baseUrl}/${owner}/${repo}`;

    return this.http.get<Repository>(url);
  }

  /**
   * Получение информации о репозитории
   * @param owner - имя пользователя
   * @param repo - название репозитория
   */
  getRepositoryReadme(owner: string, repo: string): Observable<Readme> {
    const url = `${this.baseUrl}/${owner}/${repo}/readme`;

    return this.http.get<Readme>(url);
  }

  /**
   * Получение информации о репозитории
   * @param owner - имя пользователя
   * @param repo - название репозитория
   */
  getRepositoryCommits(owner: string, repo: string): Observable<Commit[]> {
    const url = `${this.baseUrl}/${owner}/${repo}/commits`;

    return this.http.get<Commit[]>(url);
  }
}
