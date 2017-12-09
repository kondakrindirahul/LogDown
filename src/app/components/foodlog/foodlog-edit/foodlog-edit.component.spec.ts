import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodlogEditComponent } from './foodlog-edit.component';

describe('FoodlogEditComponent', () => {
  let component: FoodlogEditComponent;
  let fixture: ComponentFixture<FoodlogEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodlogEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodlogEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
