import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MechanicsComponent } from './mechanics.component';

describe('MechanicsComponent', () => {
  let component: MechanicsComponent;
  let fixture: ComponentFixture<MechanicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MechanicsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MechanicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a list of mechanics', () => {
    component.mechanics = [
      { id: 1, name: 'John Doe', specialty: 'Engine Repair' },
      { id: 2, name: 'Jane Smith', specialty: 'Tire Services' },
    ];
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('.mechanic-item').length).toBe(2);
  });

  it('should show a message if no mechanics are available', () => {
    component.mechanics = [];
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.no-mechanics')?.textContent).toContain('No mechanics available');
  });

  it('should call viewMechanicDetails when a mechanic is clicked', () => {
    spyOn(component, 'viewMechanicDetails');
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.viewMechanicDetails).toHaveBeenCalled();
  });
  
});
