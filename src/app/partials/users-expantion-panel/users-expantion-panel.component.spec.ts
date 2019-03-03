import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersExpantionPanelComponent } from './users-expantion-panel.component';

describe('UsersExpantionPanelComponent', () => {
  let component: UsersExpantionPanelComponent;
  let fixture: ComponentFixture<UsersExpantionPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersExpantionPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersExpantionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
