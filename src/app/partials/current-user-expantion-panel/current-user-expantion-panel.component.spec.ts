import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentUserExpantionPanelComponent } from './current-user-expantion-panel.component';

describe('CurrentUserExpantionPanelComponent', () => {
  let component: CurrentUserExpantionPanelComponent;
  let fixture: ComponentFixture<CurrentUserExpantionPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentUserExpantionPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentUserExpantionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
