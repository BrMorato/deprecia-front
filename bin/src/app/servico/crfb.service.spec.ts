import { TestBed } from '@angular/core/testing';

import { CrfbService } from './crfb.service';

describe('CrfbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrfbService = TestBed.get(CrfbService);
    expect(service).toBeTruthy();
  });
});
