import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JohnDoeMechanicComponent } from './john-doe-mechanic.component';

describe('JohnDoeMechanicComponent', () => {
  let component: JohnDoeMechanicComponent;
  let fixture: ComponentFixture<JohnDoeMechanicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JohnDoeMechanicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JohnDoeMechanicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
