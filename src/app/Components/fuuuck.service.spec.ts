import { TestBed } from '@angular/core/testing';

import { FuuuckService } from './fuuuck.service';

describe('FuuuckService', () => {
  let service: FuuuckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuuuckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
