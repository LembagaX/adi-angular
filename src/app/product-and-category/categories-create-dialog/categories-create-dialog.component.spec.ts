import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesCreateDialogComponent } from './categories-create-dialog.component';

describe('CategoriesCreateDialogComponent', () => {
  let component: CategoriesCreateDialogComponent;
  let fixture: ComponentFixture<CategoriesCreateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesCreateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
