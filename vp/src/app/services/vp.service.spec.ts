import { TestBed } from '@angular/core/testing';

import { VpService } from './vp.service';

describe('VpService', () => {
  let service: VpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
