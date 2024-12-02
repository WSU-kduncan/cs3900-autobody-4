import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceOrderDetailsComponent } from './service-order-details.component';

describe('ServiceOrderDetailsComponent', () => {
  let component: ServiceOrderDetailsComponent;
  let fixture: ComponentFixture<ServiceOrderDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceOrderDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
