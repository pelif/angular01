import { Component } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks:Array<Task>;

  constructor(private taskService:TaskService) {
    this.taskService.tasks.push({
        name: 'teste',
        value: 50,
        date_launch: '2018-07-06'
      });
    this.tasks = this.taskService.tasks;
  }
}
