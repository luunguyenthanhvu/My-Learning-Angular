import { Component, input } from '@angular/core';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './app-tasks.component.html',
})
export class AppTasksComponent {
  id = input<string | undefined>();
  name = input<string | undefined>();
}
