import { TestBed } from '@angular/core/testing';

import { DepreciacaoService } from './depreciacao.service';

describe('DepreciacaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DepreciacaoService = TestBed.get(DepreciacaoService);
    expect(service).toBeTruthy();
  });
});
