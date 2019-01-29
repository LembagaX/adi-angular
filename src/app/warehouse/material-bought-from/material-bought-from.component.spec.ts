import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialBoughtFromComponent } from './material-bought-from.component';

describe('MaterialBoughtFromComponent', () => {
  let component: MaterialBoughtFromComponent;
  let fixture: ComponentFixture<MaterialBoughtFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialBoughtFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialBoughtFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
