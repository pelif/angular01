import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { FormatCurrencyPipe } from './format-currency.pipe';
import { FormatDatePipe } from './format-date.pipe';
import { MyTaskDirective } from './my-task.directive';
import { TaskNewComponent } from './task-new/task-new.component';
import { TaskService } from './task.service';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    FormatCurrencyPipe,
    FormatDatePipe,
    MyTaskDirective,
    TaskNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ TaskService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
