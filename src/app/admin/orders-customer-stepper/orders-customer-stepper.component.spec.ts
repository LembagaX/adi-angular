import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersCustomerStepperComponent } from './orders-customer-stepper.component';

describe('OrdersCustomerStepperComponent', () => {
  let component: OrdersCustomerStepperComponent;
  let fixture: ComponentFixture<OrdersCustomerStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersCustomerStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersCustomerStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
