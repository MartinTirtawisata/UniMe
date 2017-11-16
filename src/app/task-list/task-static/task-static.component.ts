import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { staticTaskList } from '../task-list.model';

@Component({
  selector: 'app-task-static',
  templateUrl: './task-static.component.html',
  styleUrls: ['./task-static.component.scss']
})
export class TaskStaticComponent implements OnInit {
  @Output() staticTaskAdded = new EventEmitter<staticTaskList>();
  constructor() { }

  ngOnInit() {
  }

  onAddedStaticTask(staticTask: staticTaskList){
    this.staticTaskAdded.emit(staticTask)
  }

}
