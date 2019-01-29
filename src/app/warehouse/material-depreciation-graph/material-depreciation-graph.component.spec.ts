import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialDepreciationGraphComponent } from './material-depreciation-graph.component';

describe('MaterialDepreciationGraphComponent', () => {
  let component: MaterialDepreciationGraphComponent;
  let fixture: ComponentFixture<MaterialDepreciationGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialDepreciationGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialDepreciationGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
