import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveSelectedProductComponent } from './remove-selected-product.component';

describe('RemoveSelectedProductComponent', () => {
  let component: RemoveSelectedProductComponent;
  let fixture: ComponentFixture<RemoveSelectedProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveSelectedProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveSelectedProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
