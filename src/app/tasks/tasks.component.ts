import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';
@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;
  

  constructor(private tasksService: TasksService) {

  }
  isAddingTask = false;
  

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }
  onCompleteTask(id: string) {
    this.tasksService.removeTask(id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

  onAddNewTask(task: NewTaskData) {
    this.isAddingTask = false;
    this.tasksService.addTask(task, this.userId);
  }
}
