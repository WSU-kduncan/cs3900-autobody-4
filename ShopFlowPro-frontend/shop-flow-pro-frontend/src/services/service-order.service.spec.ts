import { TestBed } from '@angular/core/testing';
import { ServiceOrderService } from './service-order.service';

describe('ServiceOrderService', () => {
  let service: ServiceOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceOrderService],
    });

    service = TestBed.inject(ServiceOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the list of service orders', () => {
    const orders = service.getOrders();
    expect(orders.length).toBe(2); // Based on initial mock data
    expect(orders[0].id).toBe(12345);
    expect(orders[1].customer_first_name).toBe('Jane');
  });

  it('should add a new service order', () => {
    const newOrder = {
      id: 54321,
      serviceId: 3,
      vin: '9X8Y7Z6W5V4U3T2S1R0P',
      customer_first_name: 'Alice',
      customer_last_name: 'Johnson',
      date_received: new Date(),
      service_cost: 199.99,
    };

    service.addOrder(newOrder);

    const orders = service.getOrders();
    expect(orders.length).toBe(3); // Two initial orders + one new order
    expect(orders[2]).toEqual(newOrder); // Check the newly added order
  });
});
