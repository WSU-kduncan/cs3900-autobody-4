import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomepageComponent } from './homepage.component';

describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomepageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the welcome title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Welcome to ShopFlowPro');
  });

  it('should call navigateToFeature method on button click', () => {
    spyOn(component, 'navigateToFeature');
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.navigateToFeature).toHaveBeenCalled();
  });

  it('should initialize feature list', () => {
    expect(component.features.length).toBeGreaterThan(0);
  });
  
});
