import { Component, OnInit, Input } from '@angular/core';
import { TaskList } from '../task-list/task-list.model';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  @Input() task: TaskList;
  constructor() { }

  ngOnInit() {
  }



}
