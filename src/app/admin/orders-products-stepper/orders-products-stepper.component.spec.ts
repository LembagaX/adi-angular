import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersProductsStepperComponent } from './orders-products-stepper.component';

describe('OrdersProductsStepperComponent', () => {
  let component: OrdersProductsStepperComponent;
  let fixture: ComponentFixture<OrdersProductsStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersProductsStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersProductsStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
