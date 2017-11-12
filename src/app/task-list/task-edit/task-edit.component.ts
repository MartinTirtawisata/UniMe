import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';

import { TaskList } from '../task-list.model';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {
  @ViewChild('taskInput') taskInputRef: ElementRef;
  @ViewChild('timeInput') timeInputRef: ElementRef;
  @Output() taskAdded = new EventEmitter<TaskList>();

  constructor() { }

  ngOnInit() {
  }

  onAddTask(){
    const taskDesc = this.taskInputRef.nativeElement.value;
    const time = this.timeInputRef.nativeElement.value;
    const newTask = new TaskList(taskDesc, time);
    this.taskAdded.emit(newTask);

  }



}
