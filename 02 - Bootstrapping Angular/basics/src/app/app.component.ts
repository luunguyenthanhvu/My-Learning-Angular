import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from '../dummy-users';
import { AppTasksComponent } from './app-tasks/app-tasks.component';
import { NewTaskComponent } from './app-tasks/new-task/new-task.component';
@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    UserComponent,
    AppTasksComponent,
    NewTaskComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }

  onAddNewTask(userId: string | undefined) {
    console.log('ok ne');
    alert('ddang add task user Id' + userId);
  }
}
