import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersCreateDialogComponent } from './customers-create-dialog.component';

describe('CustomersCreateDialogComponent', () => {
  let component: CustomersCreateDialogComponent;
  let fixture: ComponentFixture<CustomersCreateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersCreateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
