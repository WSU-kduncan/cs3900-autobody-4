import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the search form', () => {
    expect(component.searchForm).toBeDefined();
    expect(component.searchForm.controls['searchQuery']).toBeDefined();
  });

  it('should emit search event when form is submitted', () => {
    jest.spyOn(component.searchEvent, 'emit');
    component.searchForm.setValue({ searchQuery: 'Test Query' });
    component.onSearch();
    expect(component.searchEvent.emit).toHaveBeenCalledWith('Test Query');
  });

  it('should disable submit button if form is invalid', () => {
    component.searchForm.setValue({ searchQuery: '' });
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector('button') as HTMLButtonElement;
    expect(button.disabled).toBe(true);
  });
});
