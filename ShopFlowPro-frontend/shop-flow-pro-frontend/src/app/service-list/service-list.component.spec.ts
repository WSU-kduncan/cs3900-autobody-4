import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServiceListComponent } from './service-list.component';

describe('ServiceListComponent', () => {
  let component: ServiceListComponent;
  let fixture: ComponentFixture<ServiceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render service cards', () => {
    component.services = [
      { id: 1, name: 'Oil Change', cost: 50 },
      { id: 2, name: 'Tire Rotation', cost: 30 },
    ];
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('.service-item').length).toBe(2);
  });
});
