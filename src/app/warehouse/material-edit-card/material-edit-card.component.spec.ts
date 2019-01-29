import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialEditCardComponent } from './material-edit-card.component';

describe('MaterialEditCardComponent', () => {
  let component: MaterialEditCardComponent;
  let fixture: ComponentFixture<MaterialEditCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialEditCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialEditCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
