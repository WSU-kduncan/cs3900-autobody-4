
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render footer text', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent).toContain('Footer Text');
  });

  it('should call a method when a link is clicked', () => {
    spyOn(component, 'onLinkClick');
    const compiled = fixture.nativeElement as HTMLElement;
    const link = compiled.querySelector('a');
    link?.dispatchEvent(new Event('click'));
    expect(component.onLinkClick).toHaveBeenCalled();
  });
});
