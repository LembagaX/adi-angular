import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturesFormComponent } from './manufactures-form.component';

describe('ManufacturesFormComponent', () => {
  let component: ManufacturesFormComponent;
  let fixture: ComponentFixture<ManufacturesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufacturesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
