import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialsExpantionPanelComponent } from './materials-expantion-panel.component';

describe('MaterialsExpantionPanelComponent', () => {
  let component: MaterialsExpantionPanelComponent;
  let fixture: ComponentFixture<MaterialsExpantionPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialsExpantionPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialsExpantionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
