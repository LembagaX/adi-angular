import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsExpantionPanelComponent } from './products-expantion-panel.component';

describe('ProductsExpantionPanelComponent', () => {
  let component: ProductsExpantionPanelComponent;
  let fixture: ComponentFixture<ProductsExpantionPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsExpantionPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsExpantionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
