import { Injectable } from '@angular/core';

@Injectable()
export class QueryHelperService {
  public static getParamString(param: any): string {
    return Object.keys(param)
      .map((key: string) => `${key}=${encodeURIComponent(param[key])}`)
      .join('+');
  }

  public static filterNonNullValues<T>(params: Object): Object {
    return Object.fromEntries(
      Object.entries(params).filter(([key, value]) => value !== null)
    );
  }
}
