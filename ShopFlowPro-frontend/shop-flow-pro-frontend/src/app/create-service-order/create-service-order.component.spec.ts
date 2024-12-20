import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateServiceOrderComponent } from './create-service-order.component';

describe('CreateServiceOrderComponent', () => {
  let component: CreateServiceOrderComponent;
  let fixture: ComponentFixture<CreateServiceOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateServiceOrderComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateServiceOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a valid form when all fields are filled', () => {
    component.serviceOrderForm.setValue({
      customerFirstName: 'John',
      customerLastName: 'Doe',
      vin: '1A2B3C4D5E6F7G8H9I0J',
      serviceId: 1,
    });
    expect(component.serviceOrderForm.valid).toBe(true);
  });

  it('should have an invalid form when required fields are empty', () => {
    component.serviceOrderForm.setValue({
      customerFirstName: '',
      customerLastName: '',
      vin: '',
      serviceId: null,
    });
    expect(component.serviceOrderForm.valid).toBe(false);
  });

  it('should render form fields', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('input')).toBeTruthy();
    expect(compiled.querySelector('button')).toBeTruthy();
  });

  it('should call submit method on form submission', () => {
    spyOn(component, 'onSubmit');
    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));
    expect(component.onSubmit).toHaveBeenCalled();
  });
});
