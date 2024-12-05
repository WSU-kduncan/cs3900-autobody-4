import { TestBed } from '@angular/core/testing';

import { MechanicsService } from './mechanics.service';

describe('MechanicsService', () => {
  let service: MechanicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MechanicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
