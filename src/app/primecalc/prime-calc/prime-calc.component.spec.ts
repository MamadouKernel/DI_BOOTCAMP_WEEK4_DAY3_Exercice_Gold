import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeCalcComponent } from './prime-calc.component';

describe('PrimeCalcComponent', () => {
  let component: PrimeCalcComponent;
  let fixture: ComponentFixture<PrimeCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeCalcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimeCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
