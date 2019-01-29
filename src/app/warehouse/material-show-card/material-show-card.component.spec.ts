import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialShowCardComponent } from './material-show-card.component';

describe('MaterialShowCardComponent', () => {
  let component: MaterialShowCardComponent;
  let fixture: ComponentFixture<MaterialShowCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialShowCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialShowCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
