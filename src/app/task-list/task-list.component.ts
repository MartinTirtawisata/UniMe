import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskList } from './task-list.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  @Output() taskWasSelected = new EventEmitter<TaskList>();

  tasks: TaskList[] = [
    new TaskList('hey',1)
  ]

  constructor() { }

  ngOnInit() {
  }

  onAddedTask(task: TaskList){
    this.taskWasSelected.emit(task);
  }

}
