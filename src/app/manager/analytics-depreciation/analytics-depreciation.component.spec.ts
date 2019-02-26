import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsDepreciationComponent } from './analytics-depreciation.component';

describe('AnalyticsDepreciationComponent', () => {
  let component: AnalyticsDepreciationComponent;
  let fixture: ComponentFixture<AnalyticsDepreciationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyticsDepreciationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsDepreciationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
