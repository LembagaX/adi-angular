import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachProductComponent } from './attach-product.component';

describe('AttachProductComponent', () => {
  let component: AttachProductComponent;
  let fixture: ComponentFixture<AttachProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttachProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttachProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
