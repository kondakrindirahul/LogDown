import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooditemEditComponent } from './fooditem-edit.component';

describe('FooditemEditComponent', () => {
  let component: FooditemEditComponent;
  let fixture: ComponentFixture<FooditemEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooditemEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooditemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
