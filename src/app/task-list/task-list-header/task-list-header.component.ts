import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { TaskList } from '../task-list.model';

@Component({
  selector: 'app-task-list-header',
  templateUrl: './task-list-header.component.html',
  styleUrls: ['./task-list-header.component.scss']
})
export class TaskListHeaderComponent implements OnInit {
  @Output() taskAdded = new EventEmitter<TaskList>();
  @Output() featureClicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onAddedTask(task: TaskList){
    this.taskAdded.emit(task);
  }

  onClick(feature: string){
    this.featureClicked.emit(feature)
  }

}
