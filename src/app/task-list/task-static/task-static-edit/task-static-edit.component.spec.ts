import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskStaticEditComponent } from './task-static-edit.component';

describe('TaskStaticEditComponent', () => {
  let component: TaskStaticEditComponent;
  let fixture: ComponentFixture<TaskStaticEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskStaticEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskStaticEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
