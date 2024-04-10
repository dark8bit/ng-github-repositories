import { Injectable } from '@angular/core';

@Injectable()
export class SharedHelperService {
  public static getParamString(param: Record<string, any>): string {
    return Object.keys(param)
      .map((key: string) => `${key}=${encodeURIComponent(param[key])}`)
      .join('+');
  }

  public static filterNonNullValues(params: Object): Record<string, any> {
    return Object.fromEntries(
      Object.entries(params).filter(([key, value]) => value !== null)
    );
  }
}
