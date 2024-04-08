import { TestBed } from '@angular/core/testing';

import { TokenFacadeService } from './token-facade.service';

describe('TokenFacadeService', () => {
  let service: TokenFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
