import { Component, input } from '@angular/core';

@Component({
  selector: 'new-task',
  standalone: true,
  templateUrl: './new-task.component.html',
})
export class NewTaskComponent {
  isOpen = input.required<boolean>();
}
