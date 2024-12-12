import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactComponent } from '../contact/contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  // Check if the component is created
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // Check if the title is displayed correctly
  it('should display contact form title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Contact Us');
  });
});
