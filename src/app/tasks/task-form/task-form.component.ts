import { Component } from '@angular/core';
import {TaskService} from '../shared/task.service';
import {Task} from '../shared/task';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-task-form',
  standalone: false,
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss'
})
export class TaskFormComponent {
  task!: Task ;
  taskValue!: Task;
  constructor(
    private taskService: TaskService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.initTask();
    this.editTask();
  }

  initTask() {
    this.task = {description: ''};
    this.taskValue = {description: ''};
  }

  saveTask() {
    let ok = this.validar(this.taskValue);
    if(!ok) return;

    let isEdit = this.task.id;
    if(isEdit){
      ok = this.updateTask(this.taskValue);
    }else{
      ok = this.addTask(this.taskValue);
    }

    if(ok){
      this.navigateToHome();
    }
  }


  private validar(taskData: Task) {
    if(!taskData.description){
      alert("Descrição Obrigatória");
      return false;
    }
    return true;
  }

  private updateTask(taskParam:Task): boolean {
    this.taskService.updateTask(taskParam);
    return true;
  }

  private addTask(taskParam: Task): boolean {
    /* Em um projeto real, deveria ter sido removido.
    console.log('Tarefa adicionada',JSON.stringify(this.task));
    console.log('Tarefa adicionada',this.task);*/
    this.taskService.addTask(taskParam);
    this.initTask();
    return true;
  }

  refreshTask($event: Event) {
    const input = $event.target as HTMLInputElement;
    this.taskValue.description = input.value;
  }

  private editTask() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
      let task = this.taskService.getTask(parseInt(id ?? '0'));
      if(task){
        this.task = task;
        this.taskValue.id = task.id ?? 0;
        this.taskValue.description = task.description;
      }
    }
  }

  public navigateToHome() {
    this.router.navigate(['/']);
  }
}
