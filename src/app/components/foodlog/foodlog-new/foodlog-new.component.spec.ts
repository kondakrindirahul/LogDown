import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodlogNewComponent } from './foodlog-new.component';

describe('FoodlogNewComponent', () => {
  let component: FoodlogNewComponent;
  let fixture: ComponentFixture<FoodlogNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodlogNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodlogNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
