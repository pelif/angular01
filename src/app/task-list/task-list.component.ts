import { Component} from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks = [];
  task:Task = {
    name: "",
    value: 0,
    date_launch: '2018-05-05'
  };
  add() {
    let task = Object.assign({}, this.task);
    this.tasks.push(task);
  }

}
