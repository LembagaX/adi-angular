import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersAddressSheetComponent } from './customers-address-sheet.component';

describe('CustomersAddressSheetComponent', () => {
  let component: CustomersAddressSheetComponent;
  let fixture: ComponentFixture<CustomersAddressSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersAddressSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersAddressSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
