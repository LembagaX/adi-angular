import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersAddressesComponent } from './customers-addresses.component';

describe('CustomersAddressesComponent', () => {
  let component: CustomersAddressesComponent;
  let fixture: ComponentFixture<CustomersAddressesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersAddressesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersAddressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
