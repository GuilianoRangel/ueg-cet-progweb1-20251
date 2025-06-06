import { Component } from '@angular/core';
import { Task } from '../shared/task';
import {MatTableDataSource} from '@angular/material/table';
import {TaskService} from '../shared/task.service';

@Component({
  selector: 'app-task-list',
  standalone: false,
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  dataSource = new MatTableDataSource<Task>();

  constructor(private taskService: TaskService) {
    this.updateTable();
  }


  displayedColumns: string[] = ['description', 'status', 'actions'];

  toggleCompleted(task: Task): void {
    task.completed = !task.completed;
  }

  remover(task: Task) {
    console.log('Tarefa removida',JSON.stringify(task));
    this.taskService.removeTask(task.id ?? 0);
    this.updateTable();
  }

  private updateTable() {
    this.dataSource.data = this.taskService.getTasks();
  }
}
