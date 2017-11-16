import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskList } from './task-list.model';
import { staticTaskList } from './task-list.model'

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  @Output() taskWasSelected = new EventEmitter<TaskList>();
  @Output() staticTaskWasSelected = new EventEmitter<staticTaskList>();

  loadedFeature = 'flexible';

  tasks: TaskList[] = [
    new TaskList('1',1,'1',1,'1',1)
  ]

  staticTasks: staticTaskList[] = [
    new staticTaskList('1',1,'1',1,'1')
  ]



  constructor() { }

  ngOnInit() {
  }

  onAddedTask(task: TaskList){
    this.taskWasSelected.emit(task);
  }

  onNavigate(feature: string){
    this.loadedFeature = feature
  }

  onStaticAddedTask(staticTask: staticTaskList){
    this.staticTaskWasSelected.emit(staticTask);
  }



}
