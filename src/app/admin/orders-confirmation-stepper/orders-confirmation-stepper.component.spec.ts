import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersConfirmationStepperComponent } from './orders-confirmation-stepper.component';

describe('OrdersConfirmationStepperComponent', () => {
  let component: OrdersConfirmationStepperComponent;
  let fixture: ComponentFixture<OrdersConfirmationStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersConfirmationStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersConfirmationStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
