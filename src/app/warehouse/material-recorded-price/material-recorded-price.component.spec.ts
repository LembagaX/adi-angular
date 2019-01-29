import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialRecordedPriceComponent } from './material-recorded-price.component';

describe('MaterialRecordedPriceComponent', () => {
  let component: MaterialRecordedPriceComponent;
  let fixture: ComponentFixture<MaterialRecordedPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialRecordedPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialRecordedPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
