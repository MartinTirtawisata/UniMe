import { Component } from '@angular/core';

import { TaskList } from './task-list/task-list.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  signed_in = 'false';
  selectedTask: TaskList;
  title = 'app';

}
