import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsOrderComponent } from './analytics-order.component';

describe('AnalyticsOrderComponent', () => {
  let component: AnalyticsOrderComponent;
  let fixture: ComponentFixture<AnalyticsOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyticsOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
