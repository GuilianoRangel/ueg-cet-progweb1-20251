import { Injectable } from '@angular/core';
import {Task} from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks!: Task[];

  constructor() {
    this.initTaskss();
  }

  private initTaskss() {
    this.tasks = [
      {id: 1, description: 'Lavar o carro', completed: false},
      {id: 2, description: 'Estudar Angular', completed: true},
      {id: 3, description: 'Fazer compras', completed: false},
      {id: 4, description: 'Fazer compras2', completed: false},
      {id: 5, description: 'Fazer compras3', completed: false},

    ];
  }

  getTasks() {
    return this.tasks;
  }

  getTask(id: number) {
    return this.tasks.find(task => task.id === id);
  }


  addTask(task: Task) {
    let length = this.tasks.length ?? 0;
    let lastTask = this.tasks[length-1];
    task.id = (lastTask.id ?? 0) + 1;
    //task.id = this.tasks[this.tasks.length-1].id+1;
    task.completed = false;
    this.tasks.push(task);
  }
  removeTask(id: number) {
    console.log('Tarefa removida',id);
    console.log("tasks antes remoção:",JSON.stringify(this.tasks))
    this.tasks = this.tasks.filter(task => task.id !== id);
    console.log("tasks depois remoção:",JSON.stringify(this.tasks))
  }

  updateTask(task: Task) {
    console.log('Tarefa atualizada',JSON.stringify(task));
    const taskDb = this.getTask(task.id??0);
    taskDb!.description = task.description;
    //taskDb!.completed = task.completed;
  }
}
