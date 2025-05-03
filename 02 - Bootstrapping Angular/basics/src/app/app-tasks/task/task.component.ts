import { Component, input, output } from '@angular/core';
import { Task } from './task.model';
@Component({
  selector: 'task',
  standalone: true,
  templateUrl: './task.component.html',
})
export class TaskComponent {
  task = input.required<Task>();
  complete = output<string>();

  onCompleteTask() {
    this.complete.emit(this.task().id);
  }
}
