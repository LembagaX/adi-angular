import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturesProductsComponent } from './manufactures-products.component';

describe('ManufacturesProductsComponent', () => {
  let component: ManufacturesProductsComponent;
  let fixture: ComponentFixture<ManufacturesProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufacturesProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturesProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
