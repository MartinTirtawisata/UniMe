import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import { staticTaskList } from '../../task-list.model';

@Component({
  selector: 'app-task-static-edit',
  templateUrl: './task-static-edit.component.html',
  styleUrls: ['./task-static-edit.component.scss']
})
export class TaskStaticEditComponent implements OnInit {
  @ViewChild('taskInput') taskInputRef: ElementRef;
  @ViewChild('startTimeInput') startTimeInputRef: ElementRef;
  @ViewChild('startDayInput') startDayInputRef: ElementRef;
  @ViewChild('endTimeInput') endTimeInputRef: ElementRef;
  @ViewChild('endDayInput') endDayInputRef: ElementRef;

  @Output() staticTaskAdded = new EventEmitter<staticTaskList>();
  constructor() { }

  ngOnInit() {
  }

  onAddStaticTask(){
    const taskDesc = this.taskInputRef.nativeElement.value;
    const startTime = this.startTimeInputRef.nativeElement.value;
    const startDay = this.startDayInputRef.nativeElement.value;
    const endTime = this.endTimeInputRef.nativeElement.value;
    const endDay = this.endDayInputRef.nativeElement.value;
    const newTask = new staticTaskList(taskDesc, startTime, startDay, endTime, endDay);
    this.staticTaskAdded.emit(newTask);

  }

}
