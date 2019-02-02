import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturesCreateComponent } from './manufactures-create.component';

describe('ManufacturesCreateComponent', () => {
  let component: ManufacturesCreateComponent;
  let fixture: ComponentFixture<ManufacturesCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufacturesCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
