import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { ServiceOrderService } from '../../services/service-order.service';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';

// Unit Test
describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let serviceOrderService: ServiceOrderService;

  beforeEach(() => {
    const mockServiceOrderService = {
      getOrders: jest.fn(),  // Jest mock function for getOrders
    };

    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [FormsModule],
      providers: [{ provide: ServiceOrderService, useValue: mockServiceOrderService }],
    });

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    serviceOrderService = TestBed.inject(ServiceOrderService);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call ServiceOrderService to get orders on ngOnInit', () => {
    const mockOrders = [
      { id: 1, serviceId: 'A123', customer_first_name: 'John', customer_last_name: 'Doe', vin: '1HGCM82633A123456' },
      { id: 2, serviceId: 'B456', customer_first_name: 'Jane', customer_last_name: 'Smith', vin: '2HGCM82633A123457' }
    ];

    // Mock the return value of getOrders
    (serviceOrderService.getOrders as jest.Mock).mockReturnValue(of(mockOrders));

    component.ngOnInit();
    fixture.detectChanges();

    expect(component.serviceOrders).toEqual(mockOrders);
    expect(component.searchResults).toEqual(mockOrders);
  });

  it('should filter search results when onSearch is called with a query', () => {
    const mockOrders = [
      { id: 1, serviceId: 'A123', customer_first_name: 'John', customer_last_name: 'Doe', vin: '1HGCM82633A123456' },
      { id: 2, serviceId: 'B456', customer_first_name: 'Jane', customer_last_name: 'Smith', vin: '2HGCM82633A123457' }
    ];
    (serviceOrderService.getOrders as jest.Mock).mockReturnValue(of(mockOrders));
    component.ngOnInit();

    // Case where searchQuery matches first name
    component.searchQuery = 'John';
    component.onSearch();
    expect(component.searchResults.length).toBe(1);
    expect(component.searchResults[0].customer_first_name).toBe('John');

    // Case where searchQuery matches serviceId
    component.searchQuery = 'B456';
    component.onSearch();
    expect(component.searchResults.length).toBe(1);
    expect(component.searchResults[0].serviceId).toBe('B456');

    // Case where no query is entered
    component.searchQuery = '';
    component.onSearch();
    expect(component.searchResults.length).toBe(2); // Should return all orders
  });

  it('should display "No results found" when no orders match the search', () => {
    const mockOrders = [
      { id: 1, serviceId: 'A123', customer_first_name: 'John', customer_last_name: 'Doe', vin: '1HGCM82633A123456' },
      { id: 2, serviceId: 'B456', customer_first_name: 'Jane', customer_last_name: 'Smith', vin: '2HGCM82633A123457' }
    ];
    (serviceOrderService.getOrders as jest.Mock).mockReturnValue(of(mockOrders));
    component.ngOnInit();

    component.searchQuery = 'Nonexistent';
    component.onSearch();
    expect(component.searchResults.length).toBe(0);
  });
});
