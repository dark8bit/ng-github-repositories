import { Injectable } from '@angular/core';
import {environment} from "@environments/environment";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {HTTP_PARAMS} from "../../enums/http-params.enum";

@Injectable()
export class AuthApiService {
  private readonly _authUrl = `${environment.authUrl}/authorize?client_id=${environment.client_id}`;

  constructor(
    private http: HttpClient
  ) { }

  get authUrl(): string {
    return this._authUrl;
  }

  public setLogin(code: string): Observable<any> {
    const url = `${environment.authUrl}/access_token`;
    const params = new HttpParams()
      .set(HTTP_PARAMS.client_id, environment.client_id)
      .set(HTTP_PARAMS.client_secret, environment.client_secret)
      .set(HTTP_PARAMS.code, code);
    const headers = new HttpHeaders({
      'accept': 'application/json'
    });
    const options = {
      params,
      headers
    }

    return this.http.post(url, {}, options)
  }
}
