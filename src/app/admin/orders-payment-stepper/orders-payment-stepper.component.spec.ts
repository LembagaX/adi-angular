import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersPaymentStepperComponent } from './orders-payment-stepper.component';

describe('OrdersPaymentStepperComponent', () => {
  let component: OrdersPaymentStepperComponent;
  let fixture: ComponentFixture<OrdersPaymentStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersPaymentStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersPaymentStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
