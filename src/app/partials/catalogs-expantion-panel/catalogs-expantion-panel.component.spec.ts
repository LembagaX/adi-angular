import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogsExpantionPanelComponent } from './catalogs-expantion-panel.component';

describe('CatalogsExpantionPanelComponent', () => {
  let component: CatalogsExpantionPanelComponent;
  let fixture: ComponentFixture<CatalogsExpantionPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogsExpantionPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogsExpantionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
