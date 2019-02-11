import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsInfoBasicComponent } from './products-info-basic.component';

describe('ProductsInfoBasicComponent', () => {
  let component: ProductsInfoBasicComponent;
  let fixture: ComponentFixture<ProductsInfoBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsInfoBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsInfoBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
