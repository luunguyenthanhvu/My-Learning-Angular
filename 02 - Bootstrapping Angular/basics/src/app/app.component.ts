import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from '../dummy-users';
import { AppTasksComponent } from './app-tasks/app-tasks.component';
@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, AppTasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;

  onSelectUser(id: string) {
    console.log('selected' + id);
  }
}
