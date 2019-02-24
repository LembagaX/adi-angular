import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogsFormDialogComponent } from './catalogs-form-dialog.component';

describe('CatalogsFormDialogComponent', () => {
  let component: CatalogsFormDialogComponent;
  let fixture: ComponentFixture<CatalogsFormDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogsFormDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogsFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
