import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodlogListComponent } from './foodlog-list.component';

describe('FoodlogListComponent', () => {
  let component: FoodlogListComponent;
  let fixture: ComponentFixture<FoodlogListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodlogListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodlogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
