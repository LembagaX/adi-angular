import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersExpantionPanelComponent } from './orders-expantion-panel.component';

describe('OrdersExpantionPanelComponent', () => {
  let component: OrdersExpantionPanelComponent;
  let fixture: ComponentFixture<OrdersExpantionPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersExpantionPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersExpantionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
