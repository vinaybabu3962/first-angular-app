import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input () userId!: string;
  @Output() close = new EventEmitter<any>();
  private tasksService = inject(TasksService);
  // enteredTitle = signal('');
  // enteredSummary = signal('');
  // enteredDate = signal('');
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  onCancel(){
    this.close.emit();
  }

  onSubmit() {
    this.close.emit();
     this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
     }, this.userId)
  }
}
