import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskStaticComponent } from './task-static.component';

describe('TaskStaticComponent', () => {
  let component: TaskStaticComponent;
  let fixture: ComponentFixture<TaskStaticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskStaticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
