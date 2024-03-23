import { TestBed } from '@angular/core/testing';

import { RepositoryApiService } from './repository-api.service';

describe('RepositoryApiService', () => {
  let service: RepositoryApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepositoryApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
