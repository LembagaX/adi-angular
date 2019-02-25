import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogsCardComponent } from './catalogs-card.component';

describe('CatalogsCardComponent', () => {
  let component: CatalogsCardComponent;
  let fixture: ComponentFixture<CatalogsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
