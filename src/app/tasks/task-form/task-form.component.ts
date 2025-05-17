import { Component } from '@angular/core';
import {TaskService} from '../shared/task.service';
import {Task} from '../shared/task';
import {Router} from '@angular/router';

@Component({
  selector: 'app-task-form',
  standalone: false,
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss'
})
export class TaskFormComponent {
  task!: Task ;
  constructor(
    private taskService: TaskService,
    private router: Router,
  ) {
    this.initTask();
  }

  initTask() {
    this.task = {description: ''};
  }

  addTask() {
    /* Em um projeto real, deveria ter sido removido.
    console.log('Tarefa adicionada',JSON.stringify(this.task));
    console.log('Tarefa adicionada',this.task);*/
    this.taskService.addTask(this.task);
    this.initTask();
    this.router.navigate(['/']);
  }

  refreshTask($event: Event) {
    const input = $event.target as HTMLInputElement;
    this.task.description = input.value;
  }
}
