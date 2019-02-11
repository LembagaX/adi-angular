import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssembliesCreateDialogComponent } from './assemblies-create-dialog.component';

describe('AssembliesCreateDialogComponent', () => {
  let component: AssembliesCreateDialogComponent;
  let fixture: ComponentFixture<AssembliesCreateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssembliesCreateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssembliesCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
