import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TaskListComponent } from './task-list/task-list.component';
import { CalendarComponent } from './calendar/calendar.component';
import { TaskEditComponent } from './task-list/task-flex/task-edit/task-edit.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FooterComponent } from './footer/footer.component';
import { TaskFlexComponent } from './task-list/task-flex/task-flex.component';
import { TaskStaticComponent } from './task-list/task-static/task-static.component';
import { TaskListHeaderComponent } from './task-list/task-list-header/task-list-header.component';
import { TaskStaticEditComponent } from './task-list/task-static/task-static-edit/task-static-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaskListComponent,
    CalendarComponent,
    TaskEditComponent,
    SignInComponent,
    FooterComponent,
    TaskFlexComponent,
    TaskStaticComponent,
    TaskListHeaderComponent,
    TaskStaticEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
