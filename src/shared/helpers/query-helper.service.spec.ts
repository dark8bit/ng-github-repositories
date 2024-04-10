import { TestBed } from '@angular/core/testing';

import { SharedHelperService } from './shared-helper.service';

describe('QueryHelperService', () => {
  let service: SharedHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
