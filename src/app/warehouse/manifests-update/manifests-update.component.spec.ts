import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManifestsUpdateComponent } from './manifests-update.component';

describe('ManifestsUpdateComponent', () => {
  let component: ManifestsUpdateComponent;
  let fixture: ComponentFixture<ManifestsUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManifestsUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManifestsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
