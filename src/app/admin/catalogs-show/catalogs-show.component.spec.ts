import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogsShowComponent } from './catalogs-show.component';

describe('CatalogsShowComponent', () => {
  let component: CatalogsShowComponent;
  let fixture: ComponentFixture<CatalogsShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogsShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogsShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
