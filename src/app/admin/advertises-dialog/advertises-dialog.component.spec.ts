import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisesDialogComponent } from './advertises-dialog.component';

describe('AdvertisesDialogComponent', () => {
  let component: AdvertisesDialogComponent;
  let fixture: ComponentFixture<AdvertisesDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertisesDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
