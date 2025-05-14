import { TestBed } from '@angular/core/testing';

import { PininterestService } from './pininterest.service';

describe('PininterestService', () => {
  let service: PininterestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PininterestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
