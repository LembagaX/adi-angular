import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogsTableComponent } from './catalogs-table.component';

describe('CatalogsTableComponent', () => {
  let component: CatalogsTableComponent;
  let fixture: ComponentFixture<CatalogsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
