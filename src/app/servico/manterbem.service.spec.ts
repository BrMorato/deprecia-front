import { TestBed } from '@angular/core/testing';

import { ManterbemService } from './manterbem.service';

describe('ManterbemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManterbemService = TestBed.get(ManterbemService);
    expect(service).toBeTruthy();
  });
});
