import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMechanicComponent } from './add-mechanic.component';

describe('AddMechanicComponent', () => {
  let component: AddMechanicComponent;
  let fixture: ComponentFixture<AddMechanicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMechanicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMechanicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
