import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersAddressesEditComponent } from './customers-addresses-edit.component';

describe('CustomersAddressesEditComponent', () => {
  let component: CustomersAddressesEditComponent;
  let fixture: ComponentFixture<CustomersAddressesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersAddressesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersAddressesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
