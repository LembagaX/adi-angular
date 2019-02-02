import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManifestCreateComponent } from './manifest-create.component';

describe('ManifestCreateComponent', () => {
  let component: ManifestCreateComponent;
  let fixture: ComponentFixture<ManifestCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManifestCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManifestCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
