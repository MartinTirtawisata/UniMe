import { Component, OnInit } from '@angular/core';
import { TaskListComponent } from '../task-list/task-list.component';
import { TaskList } from '../task-list/task-list.model';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  tasks: TaskList[] = [
    new TaskList('hey')
  ]


  constructor() { }

  ngOnInit() {
  }



}
