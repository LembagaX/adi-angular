import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardWarehouseComponent } from './dashboard-warehouse.component';

describe('DashboardWarehouseComponent', () => {
  let component: DashboardWarehouseComponent;
  let fixture: ComponentFixture<DashboardWarehouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardWarehouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardWarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
