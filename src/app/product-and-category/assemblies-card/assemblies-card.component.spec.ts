import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssembliesCardComponent } from './assemblies-card.component';

describe('AssembliesCardComponent', () => {
  let component: AssembliesCardComponent;
  let fixture: ComponentFixture<AssembliesCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssembliesCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssembliesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
