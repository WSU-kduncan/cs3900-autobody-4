import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicFormComponent } from './mechanic-form.component';

describe('MechanicFormComponent', () => {
  let component: MechanicFormComponent;
  let fixture: ComponentFixture<MechanicFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MechanicFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MechanicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
