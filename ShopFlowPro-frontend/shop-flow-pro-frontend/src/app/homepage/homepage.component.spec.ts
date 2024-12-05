import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomepageComponent } from './homepage.component';
import { Router } from '@angular/router';
import { ServiceOrderService } from '../service-order.service';
import { of } from 'rxjs';

describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;
  let routerSpy: jest.Mocked<Router>;

  beforeEach(async () => {
    routerSpy = {
      navigate: jest.fn(),
    } as unknown as jest.Mocked<Router>;

    await TestBed.configureTestingModule({
      declarations: [HomepageComponent],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: ServiceOrderService, useValue: { getOrders: () => of([]) } },
      ],
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
    expect(compiled.querySelector('h2')?.textContent).toContain('Welcome to ShopFlowPro');
  });

  it('should call navigateToFeature method on button click', () => {
    const navigateToFeatureSpy = jest.spyOn(component, 'navigateToFeature');
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(navigateToFeatureSpy).toHaveBeenCalled();
  });

  it('should initialize todaysOrders list', () => {
    expect(component.todaysOrders.length).toBeGreaterThan(0);
  });

  it('should call router.navigate on button click', () => {
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/service-list']);
  });
});
