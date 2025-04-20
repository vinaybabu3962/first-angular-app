import { Component, EventEmitter, inject, input, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { type Task } from './task.model'
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input () task!: Task;
  private tasksService = inject(TasksService);
  onCompleteTask(){
    this.tasksService.removeTask(this.task.id);
  }
}
