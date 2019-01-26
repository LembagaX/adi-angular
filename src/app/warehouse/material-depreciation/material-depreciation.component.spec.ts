import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialDepreciationComponent } from './material-depreciation.component';

describe('MaterialDepreciationComponent', () => {
  let component: MaterialDepreciationComponent;
  let fixture: ComponentFixture<MaterialDepreciationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialDepreciationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialDepreciationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
