import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressesCreateDialogComponent } from './addresses-create-dialog.component';

describe('AddressesCreateDialogComponent', () => {
  let component: AddressesCreateDialogComponent;
  let fixture: ComponentFixture<AddressesCreateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressesCreateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressesCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
