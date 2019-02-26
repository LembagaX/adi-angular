import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsMaterialComponent } from './analytics-material.component';

describe('AnalyticsMaterialComponent', () => {
  let component: AnalyticsMaterialComponent;
  let fixture: ComponentFixture<AnalyticsMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyticsMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
