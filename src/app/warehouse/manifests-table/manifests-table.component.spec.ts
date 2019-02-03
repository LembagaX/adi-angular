import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManifestsTableComponent } from './manifests-table.component';

describe('ManifestsTableComponent', () => {
  let component: ManifestsTableComponent;
  let fixture: ComponentFixture<ManifestsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManifestsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManifestsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
