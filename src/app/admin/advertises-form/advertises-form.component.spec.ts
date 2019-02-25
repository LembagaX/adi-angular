import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisesFormComponent } from './advertises-form.component';

describe('AdvertisesFormComponent', () => {
  let component: AdvertisesFormComponent;
  let fixture: ComponentFixture<AdvertisesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertisesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
