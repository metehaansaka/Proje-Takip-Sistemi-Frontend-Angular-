import { TestBed } from '@angular/core/testing';

import { TakimServiceService } from './takim-service.service';

describe('TakimServiceService', () => {
  let service: TakimServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TakimServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
