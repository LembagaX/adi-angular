import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesExpantionPanelComponent } from './categories-expantion-panel.component';

describe('CategoriesExpantionPanelComponent', () => {
  let component: CategoriesExpantionPanelComponent;
  let fixture: ComponentFixture<CategoriesExpantionPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesExpantionPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesExpantionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
