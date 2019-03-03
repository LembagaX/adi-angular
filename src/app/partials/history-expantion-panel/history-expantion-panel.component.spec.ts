import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryExpantionPanelComponent } from './history-expantion-panel.component';

describe('HistoryExpantionPanelComponent', () => {
  let component: HistoryExpantionPanelComponent;
  let fixture: ComponentFixture<HistoryExpantionPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryExpantionPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryExpantionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
