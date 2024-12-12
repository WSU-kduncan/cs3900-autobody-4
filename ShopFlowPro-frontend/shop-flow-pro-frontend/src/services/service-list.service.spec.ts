import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ServiceListService, BASE_URL } from './service-list.service';

describe('ServiceListService', () => {
  let service: ServiceListService;
  let httpMock: HttpTestingController;

  const baseUrl = 'http://localhost:8081/shop-flow-pro-service/services';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ServiceListService,
        { provide: BASE_URL, useValue: baseUrl }
      ]
    });
    service = TestBed.inject(ServiceListService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve services from the API via GET', () => {
    const dummyServices = [{ id: 1, name: 'Service One' }, { id: 2, name: 'Service Two' }];

    service.getServices().subscribe((services: string | any[]) => {
      expect(services.length).toBe(2);
      expect(services).toEqual(dummyServices);
    });

    const request = httpMock.expectOne(baseUrl);
    expect(request.request.method).toBe('GET');
    request.flush(dummyServices);
  });
});
