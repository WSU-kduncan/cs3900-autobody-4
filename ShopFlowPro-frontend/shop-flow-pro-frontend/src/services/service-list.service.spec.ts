import { TestBed } from '@angular/core/testing';
import { ServiceListService } from './service-list.service';


describe('ServiceListService', () => {
  let service: ServiceListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
