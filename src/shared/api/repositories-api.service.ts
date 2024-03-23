import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, of} from "rxjs";
import {Repository} from "../interfaces/repository.interface";
import {SearchRepositoriesResponse} from "../interfaces/search-repositories-response.interface";
import {environment} from "@environments/environment";
import {Readme} from "../interfaces/readme.interface";

@Injectable()
export class RepositoriesApiService {
  private readonly baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getRepositories(): Observable<Repository[]> {
    const url = this.baseUrl + '/repositories';

    return this.http.get<Repository[]>(url);
  }

  searchRepositories(params: string): Observable<Repository[]> {
    const url = `${this.baseUrl}/search/repositories?q=${params}`;

    return this.http.get<SearchRepositoriesResponse>(`${this.baseUrl}/search/repositories?q=${params}`)
      .pipe(
        map(res => res.items),
        catchError(() => of([]))
      )
  }
}
