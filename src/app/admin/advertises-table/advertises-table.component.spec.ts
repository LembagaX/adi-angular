import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisesTableComponent } from './advertises-table.component';

describe('AdvertisesTableComponent', () => {
  let component: AdvertisesTableComponent;
  let fixture: ComponentFixture<AdvertisesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertisesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
