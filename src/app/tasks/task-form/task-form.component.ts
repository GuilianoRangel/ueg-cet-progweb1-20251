import { Component } from '@angular/core';
import {TaskService} from '../shared/task.service';
import {Task} from '../shared/task';

@Component({
  selector: 'app-task-form',
  standalone: false,
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss'
})
export class TaskFormComponent {
  task: Task = {description: ''};
  constructor(private taskService: TaskService) {

  }
}
