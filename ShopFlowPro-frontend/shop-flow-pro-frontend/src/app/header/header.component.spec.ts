
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  // Verify component is created
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // Check if title is correct
  it('should have a title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Header Title');
  });
  // Check if the event is emitted
  it('should emit an event on click', () => {
    spyOn(component.someEvent, 'emit');
    component.onButtonClick();
    expect(component.someEvent.emit).toHaveBeenCalled();
  });
});
