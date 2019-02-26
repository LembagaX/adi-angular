import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementsTableComponent } from './announcements-table.component';

describe('AnnouncementsTableComponent', () => {
  let component: AnnouncementsTableComponent;
  let fixture: ComponentFixture<AnnouncementsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnouncementsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnouncementsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
