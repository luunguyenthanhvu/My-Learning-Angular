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

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      sumary:
        'Learn all the basic and advanced featres of Angular & how to apply them.',
      dueDate: '03/05/2025',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Master Spring boot',
      sumary:
        'Learn all the basic and advanced featres of Spring boot & how to apply them.',
      dueDate: '03/05/2025',
    },
  ];

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.id());
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
