import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturesExpantionPanelComponent } from './manufactures-expantion-panel.component';

describe('ManufacturesExpantionPanelComponent', () => {
  let component: ManufacturesExpantionPanelComponent;
  let fixture: ComponentFixture<ManufacturesExpantionPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufacturesExpantionPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturesExpantionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
