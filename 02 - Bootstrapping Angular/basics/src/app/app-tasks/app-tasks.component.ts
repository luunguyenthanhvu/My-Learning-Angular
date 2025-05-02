import { Component, input } from '@angular/core';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './app-tasks.component.html',
})
export class AppTasksComponent {
  id = input<string | undefined>();
  name = input<string | undefined>();
}
