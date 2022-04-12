import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockCoverageStatusComponent } from './stock-coverage-status.component';

describe('StockCoverageStatusComponent', () => {
  let component: StockCoverageStatusComponent;
  let fixture: ComponentFixture<StockCoverageStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockCoverageStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockCoverageStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
