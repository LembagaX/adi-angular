import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialDepreciationAnalyticsComponent } from './material-depreciation-analytics.component';

describe('MaterialDepreciationAnalyticsComponent', () => {
  let component: MaterialDepreciationAnalyticsComponent;
  let fixture: ComponentFixture<MaterialDepreciationAnalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialDepreciationAnalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialDepreciationAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
