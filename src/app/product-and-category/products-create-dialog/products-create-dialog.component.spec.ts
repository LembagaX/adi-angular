import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsCreateDialogComponent } from './products-create-dialog.component';

describe('ProductsCreateDialogComponent', () => {
  let component: ProductsCreateDialogComponent;
  let fixture: ComponentFixture<ProductsCreateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsCreateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
