import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskFlexComponent } from './task-flex.component';

describe('TaskFlexComponent', () => {
  let component: TaskFlexComponent;
  let fixture: ComponentFixture<TaskFlexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskFlexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskFlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
