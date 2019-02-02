import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturesTableComponent } from './manufactures-table.component';

describe('ManufacturesTableComponent', () => {
  let component: ManufacturesTableComponent;
  let fixture: ComponentFixture<ManufacturesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufacturesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
