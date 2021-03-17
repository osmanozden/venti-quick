import { TestBed } from '@angular/core/testing';

import { VentiService } from './venti.service';

describe('VentiService', () => {
  let service: VentiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VentiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
