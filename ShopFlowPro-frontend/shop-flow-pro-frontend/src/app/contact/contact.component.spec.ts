import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from '../navbar/navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render navigation links', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('a').length).toBeGreaterThan(0);
  });

  
  it('should accept input values correctly', () => {
    component.inputValue = 'Test Input';
    fixture.detectChanges();
    expect(component.inputValue).toBe('Test Input');
  });

  it('should emit output on action', () => {
    spyOn(component.outputEvent, 'emit');
    component.onAction();
    expect(component.outputEvent.emit).toHaveBeenCalled();
  });

  it('should render default content', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent).toContain('Default content for Contact');
  });

  it('should trigger onClick when the button is clicked', () => {
    spyOn(component, 'onClick');
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.onClick).toHaveBeenCalled();
  });
});
