import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestedProductDialogComponent } from './requested-product-dialog.component';

describe('RequestedProductDialogComponent', () => {
  let component: RequestedProductDialogComponent;
  let fixture: ComponentFixture<RequestedProductDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestedProductDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestedProductDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
