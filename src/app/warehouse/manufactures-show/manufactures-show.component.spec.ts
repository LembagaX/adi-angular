import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturesShowComponent } from './manufactures-show.component';

describe('ManufacturesShowComponent', () => {
  let component: ManufacturesShowComponent;
  let fixture: ComponentFixture<ManufacturesShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufacturesShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturesShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
