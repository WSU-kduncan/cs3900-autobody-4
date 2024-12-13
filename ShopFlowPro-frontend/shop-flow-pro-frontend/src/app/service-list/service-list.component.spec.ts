import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServiceListComponent } from './service-list.component';
import { ServiceListService } from '../../services/service-list.service';
import { of, throwError } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

describe('ServiceListComponent', () => {
  let component: ServiceListComponent;
  let fixture: ComponentFixture<ServiceListComponent>;
  let serviceListServiceMock: jest.Mocked<ServiceListService>;

  beforeEach(async () => {
    serviceListServiceMock = {
      getServices: jest.fn(),
    } as unknown as jest.Mocked<ServiceListService>;

    await TestBed.configureTestingModule({
      imports: [RouterModule, CommonModule],
      declarations: [ServiceListComponent],
      providers: [{ provide: ServiceListService, useValue: serviceListServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch services on initialization', () => {
    const mockResponse = { data: [{ serviceName: 'Oil Change', serviceID: 1 }] };
    serviceListServiceMock.getServices.mockReturnValue(of(mockResponse));

    component.fetchServices();

    expect(serviceListServiceMock.getServices).toHaveBeenCalled();
    expect(component.services).toEqual(mockResponse.data);
  });

  it('should handle errors when fetching services', () => {
    const mockError = new Error('Failed to fetch services');
    serviceListServiceMock.getServices.mockReturnValue(throwError(() => mockError));
    jest.spyOn(console, 'error').mockImplementation(() => {}); // Mock console.error

    component.fetchServices();

    expect(serviceListServiceMock.getServices).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith('Error fetching services:', mockError);
    expect(component.services).toEqual([]);
  });
});
