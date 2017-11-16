import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { TaskList } from '../task-list.model';

@Component({
  selector: 'app-task-flex',
  templateUrl: './task-flex.component.html',
  styleUrls: ['./task-flex.component.scss']
})
export class TaskFlexComponent implements OnInit {
  @Output() taskAdded = new EventEmitter<TaskList>();

  constructor() { }

  ngOnInit() {
  }

  onAddedTask(task: TaskList){
    this.taskAdded.emit(task);
  }
}
